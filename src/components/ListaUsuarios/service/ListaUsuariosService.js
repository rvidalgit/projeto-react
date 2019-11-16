//@flow
export default class ListaUsuariosService {
    getListaUsuarios = () => {
        return fetch('data/dados.json')
            .then(response => response.json())
            .then(json => json)
            .catch(erro => {
                console.error(erro);
            });
    }

}