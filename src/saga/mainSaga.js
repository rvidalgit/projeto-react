import {all} from 'redux-saga/effects';
import {listaUsuariosSaga} from "../components/ListaUsuarios/saga/listaUsuariosSaga";

export function* mainSaga() {
    yield all([
        listaUsuariosSaga(),
    ])
}