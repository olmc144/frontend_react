import { useState } from "react";
import SearchBox from "./Components/SearchBox";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Grid from '@mui/material/Grid';
import SearchResults from "./Components/SearchResults";
//import data from "../../data/user.json";
import "./style.css";


const drawerWidth = 240;

export default function Search() { 
    const [isAtTop, setIsAtTop] = useState(false);
    const [noticias, setNoticias] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [historial, setHistorial] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [showmsj, setShowmsj] = useState(false);    

    const [open, setOpen] = useState(false);    

    const handleCloseOpenSearch = () => 
    {
        setIsAtTop(false);
        setCiudades([]);
        setNoticias([]);
        setMensaje("");
        setShowmsj(false);
        setHistorial([]);  
    };     
        
    const handleBuscarCiudad = (searchText) => {
        setOpen(true);
        setIsAtTop(true);
        setHistorial([]);  
        const getCiudades = async () => {
                    try{
                        const response = await fetch("https://localhost:44338/BuscarCiudades/City/"+searchText)
                        const data_ = await response.json();
                        setCiudades(data_.current_weather); 
                        setNoticias(data_.news.value);
                        handleBuscarHistorial();                      
                        setMensaje("");
                        setShowmsj(false);
                        setOpen(false);                        
                    } catch(err){                        
                        setCiudades([]);
                        setNoticias([]);
                        console.error(err);
                        setShowmsj(true);
                        setMensaje("NO SE ENCONTRARON RESULTADOS");
                        setOpen(false);
                    }                     
                };                             
                getCiudades().catch(null);
    };


    const handleBuscarHistorial = () => {  
      setIsAtTop(true);
      setOpen(true);    
      const getHistorial = async () => {
                  try{
                      const response = await fetch("https://localhost:44338/BuscarCiudades/Historial")
                      const data_h = await response.json();
                      setHistorial(data_h);  
                      console.log(historial);
                      setOpen(false);                           
                  } catch(err){                        
                      setHistorial([]);                      
                      console.error(err);                      
                  }                     
              };  
              getHistorial().catch(null);                                                     
  };

    
    return (      
        <Box sx={{ display: 'flex' }}>         
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clima Y Noticias
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>             
            <ListItem button="Inicio" onClick={handleCloseOpenSearch}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>   
              <ListItem button="Historial" onClick={handleBuscarHistorial}>
                <ListItemIcon>
                  <ManageSearchIcon />
                </ListItemIcon>
                <ListItemText primary="Historial" />
              </ListItem>       
          </List>          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 2, p: 3 }}>
        <Toolbar /> 
        <Grid container spacing={1}>                 
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
          <Grid item xs={4}>
            <SearchBox 
            onSearch={handleBuscarCiudad}
            onClose={handleCloseOpenSearch}
            isSearching={isAtTop}
            searchHistorial={historial}
            />
            
            </Grid>            
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                //onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <SearchResults results={ciudades} isSearching={isAtTop} lnoticias={noticias} mensajerror={mensaje} showAlert={showmsj}/>           
        </div>         
        </Grid>     
      </Box>
    </Box>            
    );
}