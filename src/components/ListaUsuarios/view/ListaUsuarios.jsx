//@flow
import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import type {Store} from "../../../shared/flowTypes/flowTypes";
import {connect} from "react-redux";
import type {InitialStateListaUsuarios} from "../redux/listaUsuariosReducer";
import {carregaLista} from "../redux/action";

type Props = {
    stateLista: InitialStateListaUsuarios,
    carregaLista: () => void,
};

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 140,
    },
});

const ListaUsuarios = (props: Props) => {

    const {carregaLista, stateLista} = props;

    const classes = useStyles();

    useEffect(() => {
        carregaLista();
    }, [carregaLista]);

    return (
        <Box p={3}>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}>

                {stateLista.lista.map(user => {
                    return (<Grid key={user.id} item xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    title={user.genre === 'M' ? `Foto do ${user.name} ` : `Foto da ${user.name}`}
                                    image={user.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {user.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.role}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)
                })}

            </Grid>
        </Box>
    );
};

const mapStateToProps = (state: Store) => {
    return {
        stateLista: state.LISTA_USUARIO,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        carregaLista: () => dispatch(carregaLista()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaUsuarios);