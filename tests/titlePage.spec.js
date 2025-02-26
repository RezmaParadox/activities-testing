const { Builder, By, until } = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');
    const assert = require('assert');

    describe('Prueba de titulo', function() {
    let driver;

    before(async function() {
        driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments(
            '--headless',
            '--no-sandbox',
            `--user-data-dir=/tmp/chrome-user-data-${Date.now()}`,
        ))
        .build();
    });

    it('Verificar el titulo de la pagina', async function() {
        await driver.get('http://localhost:4200/');
        let title = await driver.getTitle();
        assert.strictEqual(title, 'Banca');
    });

    after(async function() {
        if (driver) {
        await driver.quit();
        }
    });
});

