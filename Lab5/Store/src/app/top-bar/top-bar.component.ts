import { Component } from '@angular/core';

import { products } from '../products';
import { categories } from '../category';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  categories = categories

  category(name: string){
    console.log(this)
    for (let i = 0; i < products.length; i++) {
      if(products[i].category == name){
        alert(products[i].name)
      }
    }
  }
}
