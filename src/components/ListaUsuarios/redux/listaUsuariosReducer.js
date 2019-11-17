//@flow
import type {Action, User} from "../../../shared/flowTypes/flowTypes";
import {CARREGA_USUARIOS, LISTA_USUARIOS} from "./type";

export type InitialStateListaUsuarios = {
    lista: Array<User>
}

export const initialStateListaUsuarios: InitialStateListaUsuarios = {
    lista: []
};

type ListaUsuariosReducer = (state: InitialStateListaUsuarios, action: Action) => Object;

export const listaUsuariosReducer: ListaUsuariosReducer = (state = initialStateListaUsuarios, action) => {
    switch (action.type) {
        case LISTA_USUARIOS:
            return {
                ...state,
                lista: action.payload.lista
            };
        case CARREGA_USUARIOS:
            return {
                ...state
            };
        default:
            return state
    }
};