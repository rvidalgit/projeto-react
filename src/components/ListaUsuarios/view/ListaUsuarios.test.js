const puppeteer = require('puppeteer');
import * as Actions from '../components/ListaUsuarios/redux/action';
import * as Types from '../components/ListaUsuarios/redux/type';

const now = new Date;
const name = now.getFullYear().toString() + '-' + now.getMonth().toString() + '-' + now.getDate().toString();

describe('Testa carregamento da página', () => {
    test('Teste da exibição dos elementos', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            },
            userAgent: ''
        });

        await page.goto('http://localhost:3000/', {waitUntil: 'networkidle0'});

        const muiGridItem = await page.$eval('.MuiGrid-item ', el => !!el);
        const listItems = await page.$$('.MuiGrid-item');
        expect(muiGridItem).toBe(true);
        expect(listItems.length).toBe(6);
        browser.close();
    }, 16000);
});

describe('Screenshot do mobile', () => {
    test('Captura a exibição dos itens no celular', async () => {
        let browser = await puppeteer.launch({
            headless: true
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: 440,
                height: 600
            },
            userAgent: ''
        });
        await page.goto('http://localhost:3000/', {waitUntil: 'networkidle0'});

        await page.screenshot(
            {
                path: `./src/test/${name}-mobile-listaUsuarios.png`,
                fullPage: true
            }
        );
        browser.close();
    }, 16000);
});

describe('Gera PDF', () => {
    test('Captura a tela em um PDF', async () => {
        let browser = await puppeteer.launch({
            headless: true
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            },
            userAgent: ''
        });

        await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});
        await page.pdf({
            path: `./src/test/${name}-web-listaUsuarios.pdf`,
            format: 'A3',
            printBackground: true,
            headerTemplate: '<h1>teste</h1>'
        });
        browser.close();
    }, 16000);
});

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
