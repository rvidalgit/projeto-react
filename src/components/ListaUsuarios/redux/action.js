//@flow
import {CARREGA_USUARIOS, LISTA_USUARIOS} from "./type";
import type {User} from "../../../shared/flowTypes/flowTypes";

export const carregaLista = () => {
    return {
        type: CARREGA_USUARIOS
    }
};

export const listaUsuarios = (listaUsuarios: Array<User>) => {
    return {
        type: LISTA_USUARIOS,
        payload: {
            lista: listaUsuarios
        }
    }
};