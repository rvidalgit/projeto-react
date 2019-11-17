import {combineReducers} from 'redux';
import {listaUsuariosReducer} from "../components/ListaUsuarios/redux/listaUsuariosReducer";

const MainReducer = combineReducers({
    LISTA_USUARIO: listaUsuariosReducer
});

export default MainReducer;