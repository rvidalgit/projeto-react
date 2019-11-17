//@flow
import type {InitialStateListaUsuarios} from "../../components/ListaUsuarios/redux/listaUsuariosReducer";

export type Action = {
    type: string,
    payload: any,
};

export type User = {
    id: number,
    name: string,
    role: string,
    genre: string,
    email: string,
    image: string
};

export type Store = {
    LISTA_USUARIO: InitialStateListaUsuarios,
}