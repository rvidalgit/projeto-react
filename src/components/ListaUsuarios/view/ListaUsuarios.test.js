const faker = require('faker');
const puppeteer = require('puppeteer');

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

        await page.goto('http://localhost:3000/',{ waitUntil: 'networkidle0' });

        const muiGridItem  = await page.$eval('.MuiGrid-item ', el => !!el);
        const listItems = await page.$$('.MuiGrid-item');
        expect(muiGridItem).toBe(true);
        expect(listItems.length).toBe(6);
        browser.close();
    }, 16000);
});

describe('Screenshot do mobile', () => {
    test('Captura a exibição dos itens no celular', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: 440,
                height: 600
            },
            userAgent: ''
        });
        await page.goto('http://localhost:3000/',{ waitUntil: 'networkidle0' });
        const now = new Date;
        const name = now.getFullYear().toString() + '-' + now.getMonth().toString() + '-' + now.getDate().toString();
        await page.screenshot({path: `${name}-mobile.png`});
        browser.close();
    }, 16000);
});
