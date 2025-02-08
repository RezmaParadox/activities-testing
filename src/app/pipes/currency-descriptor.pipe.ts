import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyDescriptor'
})
export class CurrencyDescriptorPipe implements PipeTransform {

  // Funcion que transforma el codigo y el nombre de la divisa
  transform(value: {code: string, name: string}): string {
    return `${value.code} - ${value.name}`;
  }

}
