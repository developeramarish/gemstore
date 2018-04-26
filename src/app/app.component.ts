import { Component,OnInit } from '@angular/core';
import { CartModel } from './cart-model';
import { CartItemModel } from './cart-item-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GemStore';
    cart: CartModel = {
        totalprice: 0,
        totalquantity: 0,
        items: []
    }
  year = (new Date().getFullYear());
}
