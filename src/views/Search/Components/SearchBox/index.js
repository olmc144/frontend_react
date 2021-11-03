import { useState } from "react";
import {Button} from "@mui/material";
import {TextField} from '@mui/material';
import {Grid} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching, searchHistorial }) {
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }

    return(            
        <div>
            <Grid item xs={12} md={12}>                
            </Grid>
            <Grid item xs={12} md={12}>
                <h2 className="search-box-titulo">Buscador de Ciudades</h2>
                
                    <label>
                        <TextField id="outlined-basic" label="Nombre de la ciudad" variant="outlined" 
                        value={searchText} 
                        onChange={({ target: { value }}) => setSearchText(value)}
                        className="search-box-input"
                        size="small"
                        />
                    </label>
            </Grid>
            <Grid item xs={12} md={12}>                   
                        <Button 
                            variant="contained" 
                            onClick={() => onSearch(searchText)} 
                            disabled={!searchText.length}
                            size="small"
                            style={{    
                                margin: "5px",                           
                                marginLeft: "5px",
                                marginRigth: "5px"
                            }}
                            >Buscar</Button>
                            {isSearching && 
                            <Button 
                                style={{ 
                                    margin: "5px",                              
                                    marginLeft: "5px",
                                    marginRigth: "5px"
                                }}
                                variant="contained" 
                                onClick={handleSearchClick} 
                                disabled={!searchText.length}
                                size="small"
                                color="error"
                            >Cerrar</Button>
                    }
                    {                    
                     searchHistorial.length > 0 && searchHistorial.map((values, index) => {
                         return( 
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> 
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ManageSearchIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={"Cod: "+values.codigo_pais+" - "+values.nombre_ciudad} secondary={"# Consultas: "+values.cantidad_s} />
                            </ListItem>                                                      
                            </List>                           
                         )
                     })
                    }         
            </Grid>        
        </div>   
    );
}