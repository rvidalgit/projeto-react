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
                width: 500,
                height: 2400
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