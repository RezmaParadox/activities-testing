import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';

//El @Injectable es un decorador que se utiliza para indicar que una clase es un servicio de Angular y
//esta disponible para ser inyectada en toda la aplicacion

@Injectable({
  providedIn: 'root'
})
export class FastForexService {

  //Se utiliza un constructor para la inyección de dependencias que sirven para acceder a los servicios
  constructor(private http: HttpClient) { }

  //Se utiliza para obtener realizar un intercambio con una cantidad
  getexchangeRateAmount(from: string, to: string, amount: number) {
    return this.http.get(`${environment.fastforex.apiUrl}/convert?from=${from}&to=${to}&amount=${amount}&api_key=${environment.fastforex.apiKey}`)
  }

  //Se utiliza para obtener el intercambio
  getExchangeRate(from: string, to: string) {
    return this.http.get(`${environment.fastforex.apiUrl}/fetch-one?from=${from}&to=${to}&api_key=${environment.fastforex.apiKey}`);
  }

  //Se utiliza para obtener las divisas
  getCurrencies() {
    return this.http.get(`${environment.fastforex.apiUrl}/currencies?api_key=${environment.fastforex.apiKey}`);
  }
}
