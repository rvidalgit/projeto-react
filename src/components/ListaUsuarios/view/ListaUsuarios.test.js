const puppeteer = require('puppeteer');

const now = new Date;
const name = now.getFullYear().toString() + '-' + now.getMonth().toString() + '-' + now.getDate().toString();

describe('Testa carregamento da página', () => {
    test('Teste da exibição dos elementos e nº de elementos', async () => {
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
                path: `./src/test_capture/${name}-mobile-listaUsuarios.png`,
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
            path: `./src/test_capture/${name}-web-listaUsuarios.pdf`,
            format: 'A3',
            printBackground: true,
            headerTemplate: '<h1>teste</h1>'
        });
        browser.close();
    }, 16000);
});
