import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function SearchResultsItem({ inoticias, msjerror }){
    
    if(inoticias.length > 0){      
    return(                    
                inoticias.length && inoticias.map((values, index) => {
                    return(                       
                        <Grid key={index} item xs={12} md={4}> 
                        <Card xs={{ maxWidth: 345, m: 2 }}>
                        <CardHeader
                              
                              avatar={ <Avatar
                                alt="Ted talk"
                                src={values.urlToImage}
                              />
                              }
                  
                              action={<IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>}
                          
                          
                          title={values.author ? "Autor: "+values.author : "Autor: Anónimo"}
                          
                          subheader={values.publishedAt}
                          />
                          <CardMedia
                            component="img"
                            height="140"
                            image={values.urlToImage}
                            alt="Nicola Sturgeon on a TED talk stage"
                          />
                  
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" component="p">
                              {values.title}
                            </Typography>
                        </CardContent>
                        <Button href={values.url} size="small">Leer más</Button>                        
                      </Card>  
                      </Grid>                                                                          
                    )
                })
                                                       
    );
    }else{
      return(
        <Alert severity="error">La ciudad consultada no tiene noticias</Alert>
      );
    }
}