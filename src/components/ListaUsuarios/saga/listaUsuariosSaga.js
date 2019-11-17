//@flow
import {all, call, put, takeEvery} from 'redux-saga/effects';
import ListaUsuariosService from "../service/ListaUsuariosService";
import {listaUsuarios} from "../redux/action";
import {CARREGA_USUARIOS} from "../redux/type";

function* executarCargaListaUsuarios() {

    const service = new ListaUsuariosService();

    try {
        const response = yield call(service.getListaUsuarios);
        yield put(listaUsuarios(response));
    } catch (error) {
        console.error(error);
    }
}

function* watchExecutarCargaListaUsuarios() {
    yield takeEvery(CARREGA_USUARIOS, executarCargaListaUsuarios);
}

export function* listaUsuariosSaga(): any {
    yield all([
        watchExecutarCargaListaUsuarios(),
    ]);
}