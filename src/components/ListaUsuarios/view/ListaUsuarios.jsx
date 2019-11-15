//@flow
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginTop: '10%',
    },
    media: {
        height: 140,
    },
});

const ListaUsuarios = () => {

    const classes = useStyles();

    let card = '';


    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center">
            <Grid key={111} item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            title={"Fotos dos usuário"}
                            image={'http://localhost:3000/images/avatar-2.png'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Rodrigo Vidal
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Programador Pleno
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </Grid>
    );
};

export default ListaUsuarios;