const { Given, When, Then, After } = require('@cucumber/cucumber');
const chrome = require('selenium-webdriver/chrome');
const { Builder, Browser, By } = require('selenium-webdriver');
const assert = require('assert');

Given('Abrir la aplicación en la ventana de intercambio de divisas', async function (){
  driver = await new Builder()
          .forBrowser('chrome')
          .setChromeOptions(new chrome.Options().addArguments(
              '--headless',
              '--no-sandbox',
              `--user-data-dir=/tmp/chrome-user-data-${Date.now()}`,
          ))
          .build();
          
  await driver.get("http://localhost:4200/foreign-exchange");
});

When('Seleccionar la divisa de origen {string}', async function (fromCurrency){
  let selectFromCurrency = await driver.findElement(By.id('fromCurrency'));
  await selectFromCurrency.click();
  await selectFromCurrency.sendKeys(fromCurrency);
});

When('Seleccionar la divisa de destino {string}', async function (toCurrency){
  let selectToCurrency = await driver.findElement(By.id('toCurrency'));
  await selectToCurrency.click();
  await selectToCurrency.sendKeys(toCurrency);
});

Then('Obtener el precio de cambio', async function () {
  let calculateButton = await driver.findElement(By.className('btn btn-primary w-100 mt-3'));
  await calculateButton.click();

  let result = await driver.findElement(By.xpath('/html/body/app-root/div/foreign-exchange/div/div/form[1]/div[2]/div/div/input')).getAttribute('value');
  console.log(result);

  assert(result != null);
})

After(async function () {
  await driver.quit();
});

