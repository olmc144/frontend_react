import SearchResultsItem from "./SearchResultsItem";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import "./style.css";

  const itemData = [
    {
      img: 'https://www.clikisalud.net/wp-content/uploads/2020/04/clima-calido-detener-covid-19.jpg',
      title: 'Alta Temperatura',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://www.viajarjamaica.com/img/clima-cuando-viajar-jamaica.jpg',
      title: 'Tropical',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://p4.wallpaperbetter.com/wallpaper/504/431/580/desert-storm-wheather-weather-changes-wallpaper-preview.jpg',
      title: 'Sequias',
      author: '@helloimnik',
    },
    {
      img: 'https://p4.wallpaperbetter.com/wallpaper/557/126/343/stormy-weather-llanes-asturias-spain-wallpaper-preview.jpg',
      title: 'Fuertes Oleajes',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://p4.wallpaperbetter.com/wallpaper/549/545/153/sky-thunder-bad-weather-lightning-wallpaper-preview.jpg',
      title: 'Tormentas Electricas',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://fondosmil.com/descargar/lluvia-27670',
      title: 'LLuvias',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Bosques',
      author: '@katie_wasserman',
    },
  ];

export default function SearchResults({ results, isSearching, lnoticias, mensajerror, showAlert, searchHistorial }) {     
    //console.log(lnoticias.articles);
    console.log(showAlert);
    return(        
        <div style={{ 
            width: "100%",
            justifyContent: "center",
            display: "block",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
        }}>
            <Grid container spacing={2} columns={1}>
        <Grid item xs={12}>
        {results.length < 1  ? <div className={`show-alert ${showAlert ? "alert--mostrar" : "alert--ocultar"}`}><Alert severity="error">{mensajerror}</Alert></div>
                :                              
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Box sx={{ my: 3, mx: 12 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {results.name}
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                        {results.sys && results.sys.country} <EditLocationIcon />
                        </Typography>
                        </Grid>
                    </Grid>                    
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                        Datos de humedad
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label={results.main && "Humedad: "+results.main.humidity} />
                        <Chip color="primary" label={results.main && "Presíon: "+results.main.pressure} />
                        <Chip label={results.main && "Temperatura: "+results.main.temp} />
                    </Stack>
                    </Box>
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>                                         
                    </Box>
                </Box>
                }
        </Grid>        
      </Grid>     
      <Box sx={{ flexGrow: 1 }}>   
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:1 }}>                
                    {lnoticias.articles ? <SearchResultsItem inoticias={lnoticias.articles && lnoticias.articles} msjerror={mensajerror}/> 
                    : 
                    <Grid item xs={12} md={4}> 
                        <ImageList sx={{ width: 800, height: 450 }}>
                            <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div">Galería</ListSubheader>
                            </ImageListItem>
                            {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                />
                                <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    >
                                    <InfoIcon />
                                    </IconButton>
                                }
                                />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    }                
            </Grid>
        </Box>                  
        </div>        
    );
}