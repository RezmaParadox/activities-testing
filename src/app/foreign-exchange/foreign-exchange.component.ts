import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { FastForexService } from '../services/fast-forex.service';
import { IAccount, ICustomer } from '../entities/interfaces';
import { AccountManagerService } from '../services/account-manager.service';
import { TranscationType } from '../entities/enums';

//La sentencia @Component es un decorador que se utiliza para indicar que una clase es un componente de Angular.
@Component({
  selector: 'foreign-exchange',
  templateUrl: './foreign-exchange.component.html',
  styleUrls: ['./foreign-exchange.component.scss']
})

//La clase ForeignExchangeComponent es una clase que implementa la interfaz
export class ForeignExchangeComponent {
  // Se definen las propiedades de la clase
  customer: ICustomer = this.storageService.retrieve('customer');
  account: any;
  accounts: IAccount[] = [];
  currencies: any[] = [];
  fromCurrency: any;
  toCurrency: any;
  fromCurrencyValue: any ;
  toCurrencyValue: any ;
  amountValue: any;
  result?: any = "";
  amountCurrency: any;
  showToast: boolean = false;
  message: string = "";

  // Se utiliza un constructor para la inyección de dependencias que sirven para acceder a los servicios
  constructor(
    private fastForexService: FastForexService,
    private storageService: LocalStorageService,
    private accountService: AccountManagerService
  ) {}

  // Se utiliza un ngOnInit para inicializar el componente cuando se crea o se carga
  ngOnInit() {
    this.accounts = this.customer.accounts;
    // Se obtienen los valores almacenados en el almacenamiento local
    this.currencies = this.storageService.retrieve('currencies');
    // Si no hay valores almacenados, se obtienen de la API
    if (!this.currencies) {
      this.fastForexService.getCurrencies().subscribe((data: any) => {
        // Se almacenan los valores
        let fields = Object.entries(data.currencies);
        // Se itera sobre los valores para obtener el nombre de la divisa y su codigo
        this.currencies = fields.map(([key, value]) => ({
          code: key,
          name: value
        }));
        // Se almacena en el almacenamiento local para no volver a realizar una peticion
        this.storageService.store('currencies', this.currencies);
      });
    }
  }

  // Se utiliza para calcular el intercambio
  calculate() {
    console.log(this.fromCurrency, this.toCurrency);
    // Se suscribe al servicio para obtener el intercambio
    this.fastForexService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe((data: any) => {
      Object.entries(data.result).map(([key, value]) => {
        this.result =  value;
      });
    });
  }

  convert(){
    this.fromCurrencyValue = this.account.currency;
    console.log(this.fromCurrencyValue)
    console.log(this.fromCurrencyValue, this.toCurrencyValue, this.amountValue);
    this.fastForexService.getexchangeRateAmount(this.fromCurrencyValue, this.toCurrencyValue, this.amountValue).subscribe((data:any) =>{
      console.log(data.result);
      console.log(data.result[this.toCurrencyValue]);
      this.amountCurrency = data.result[this.toCurrencyValue];
      this.depositCurrency();
      this.showToast = true;
      this.message = `Se realizo el intercambio con exito, de ${this.amountValue} ${this.fromCurrencyValue} a ${this.amountCurrency} ${this.toCurrencyValue}`;
    })
  }

  depositCurrency(){

        const newAccount = this.createCurrencyAccount();

        this.accountService.addTransaction(this.account, this.amountValue, TranscationType.TRANSFER).subscribe({
          next: (fam) => {
            this.accountService.addTransaction(newAccount, this.amountCurrency, TranscationType.DEPOSIT).subscribe({
              next: (tam) => {
                this.customer!.accounts = [fam, tam];
              },
              error: (error) => {
                alert(error);
              }
            });
          },
          error: (error) => {
            alert(error);
          }
        });
  }

  createCurrencyAccount(){
    const newAccount = {
      "accountId": Math.random().toString(36).substring(2, 9),
      "customerId": this.customer.customerId,
      "accountName": `Cuenta en Divisa ${this.toCurrencyValue}`,
      "balance": 0,
      "currency": this.toCurrencyValue,
      "transactions": []
    }
    this.customer.accounts.push(newAccount);
    this.storageService.store('customer', {...this.customer});
    console.log(this.customer.accounts)
    return newAccount;
  }
}
