import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
      margin: '0 auto',
      backgroundColor: '#F7F9F9',
    },
    data: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: '1rem',
        margin: '0 auto',
        width: '90%',
        backgroundColor: '#34495E',
        color: '#fff'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: '1rem',
        margin: '0 auto',
        width: '90%',
        backgroundColor: '#E5E7E9',
      }
  }));
  
  

const TableClima = ({information}) => {
    
    const classes = useStyles();
    
    const { name , province  , weather ,forecast } = information;

    return ( 
        <div>
            <Accordion style={
                {
                    borderRadius: '0', 
                    border: 'none',
                    borderBottom: '1px solid #D7DBDD',
                    color:'#fff'
                }
            }>
                <AccordionSummary
                    expandIcon={<AddCircleOutlineIcon  style={{color:'#fff',fontWeight:'bold'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{borderRadius: '0',backgroundColor:'#AAB7B8'}}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs>
                            <Paper className={classes.paper}>{name}</Paper>
                            </Grid>
                            <Grid item xs>
                            <Paper className={classes.paper}>{province}</Paper>
                            </Grid>
                            <Grid item xs>
                            <Paper className={classes.paper}>{weather.tempDesc}</Paper>
                            </Grid>
                        </Grid>
                </AccordionSummary>
                <AccordionDetails>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    {forecast.forecast[0].temp_max == null ? 
                                        <Paper className={classes.data}>
                                           Temperatura Mañana Maxima: -
                                        </Paper>
                                     : 
                                        <Paper className={classes.data}>
                                            Temperatura Mañana Maxima: {forecast.forecast[0].temp_max}°
                                        </Paper>
                                    }
                                </Grid>
                               
                                <Grid item xs={4}>
                                    {forecast.forecast[0].temp_min == null ? 
                                        <Paper className={classes.data}>
                                           Temperatura Mañana Minima: -
                                        </Paper>
                                        : 
                                        <Paper className={classes.data}>
                                            Temperatura Mañana Minima: {forecast.forecast[0].temp_min}°
                                        </Paper>
                                    }
                                </Grid>

                                <Grid item xs={4}>
                                    {weather.st == null ? 
                                       <Paper className={classes.data}>Sensación Termica : - </Paper>
                                        : 
                                        <Paper className={classes.data}>Sensación Termica : {weather.st}°</Paper>
                                    }
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    {weather.description == null ? 
                                       <Paper className={classes.data}>Estado : - </Paper>
                                        : 
                                        <Paper className={classes.data}>Estado : {weather.description}</Paper>
                                    }
                                </Grid>

                                <Grid item xs={4}>
                                    {weather.visibility == null ? 
                                        <Paper className={classes.data}>Visibilidad: - </Paper>

                                        : 
                                        <Paper className={classes.data}>Visibilidad: {weather.visibility}km</Paper>
                                    }
                                </Grid>

                                <Grid item xs={4}>
                                    {weather.humidity == null ? 
                                        <Paper className={classes.data}>Humedad : - </Paper>
                                        : 
                                        <Paper className={classes.data}>Humedad : {weather.humidity}%</Paper>
                                    }
                                </Grid>
                            </Grid>


                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    {weather.wind_speed == null ? 
                                        <Paper className={classes.data}>Ráfagas de viento: - </Paper>
                                        : 
                                        <Paper className={classes.data}>Ráfagas de viento: {weather.wind_speed}km/h</Paper>
                                    }
                                </Grid>

                                <Grid item xs={4}>
                                    {weather.wing_deg == null ? 
                                        <Paper className={classes.data}>Dirección del viento: - </Paper>
                                        : 
                                        <Paper className={classes.data}>Dirección del viento: {weather.wing_deg}</Paper>
                                    }
                                </Grid>
                                
                                <Grid item xs={4}>
                                    {weather.pressure == null ? 
                                        <Paper className={classes.data}>Presión: - </Paper>
                                        : 
                                        <Paper className={classes.data}>Presión: {weather.pressure} mbar</Paper>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                </AccordionDetails>
            </Accordion>
        </div>     
    );
}
 
TableClima.propTypes = {
    information : PropTypes.object.isRequired
}


export default TableClima;
