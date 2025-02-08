import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import Customer from 'src/assets/json/customer.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'banca';
  customer = Customer;
  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.storage.store('customer', this.customer);
  }
}
