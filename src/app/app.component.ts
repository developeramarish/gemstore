import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
    title = 'GemStore';
    author = 'Joe Johnson';
    
    year = (new Date().getFullYear());
}