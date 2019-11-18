const Actions = require('../redux/action');
const Types = require('../redux/type');

describe('Carrega action', () => {

    it('Verifica o type da action', () => {
        const expectedAction = {
            type: Types.CARREGA_USUARIOS
        };

        expect(Actions.carregaLista()).toEqual(expectedAction);

    }, 16000);

    it('Verifica o type da action', () => {
        const expectedAction = {
            type: Types.LISTA_USUARIOS,
            payload: {}
        };

        expect(Actions.listaUsuarios()).toEqual(expectedAction);

    }, 16000);


    it('Verifica carregamento da lista', () => {
        const expectedAction = {
            type: Types.LISTA_USUARIOS,
            payload: {
                lista:
                    [{
                        "id": 7,
                        "name": "Rodrigo Vidal",
                        "role": "Programador",
                        "genre": "M",
                        "email": "rvidal@nossaempresa.com.br",
                        "image": "images/image-not-found.png"
                    }]
            }
        };

        expect(Actions.listaUsuarios([{
            "id": 7,
            "name": "Rodrigo Vidal",
            "role": "Programador",
            "genre": "M",
            "email": "rvidal@nossaempresa.com.br",
            "image": "images/image-not-found.png"
        }])).toEqual(expectedAction);

        expect(expectedAction.payload.lista[0].id).toEqual(7);
        expect(expectedAction.payload.lista[0].name).toEqual("Rodrigo Vidal");
        expect(expectedAction.payload.lista[0].role).toEqual("Programador");
        expect(expectedAction.payload.lista[0].genre).toEqual("M");
        expect(expectedAction.payload.lista[0].email).toEqual("rvidal@nossaempresa.com.br");
        expect(expectedAction.payload.lista[0].image).toEqual("images/image-not-found.png");

    }, 16000);
});