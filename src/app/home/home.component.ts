import { Component, OnInit, Input } from '@angular/core';
import {GemModel} from '../gem-model';
import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    homeGems: GemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-01.gif',
        inventory: 10,
        colors: ["red", "blue", "green"],
        reviews: [{
            id:1,
            createddate: '4/25/2018',
            rating: 5,
            author:'joe@codingtemple.com',
            body: 'I love this'
        }]
        },
         {
        id: 2,
        name: 'Pentagonal',
        price: 5.95,
        description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
        fullImagePath: './assets/gem-02.gif',
        inventory: 0,
        colors: ["red", "yellow", "green"],
        reviews: []
        },
        {
        id: 3,
        name: 'Hexagonal',
        price: 12.95,
        description: 'The hexagonal gem is one of our best sellers',
        fullImagePath: './assets/gem-03.gif',
        inventory: 6,
        colors: ["red", "blue", "purple"],
        reviews: []
         }]
    @Input() homeCart: CartModel;
  constructor(private httpClient: HttpClient){
        
    }

  ngOnInit() {
      this.httpClient.get('/assets/gems.json').subscribe((data:
        GemModel[]) => {
          this.homeGems = data;
      });
  }

}
