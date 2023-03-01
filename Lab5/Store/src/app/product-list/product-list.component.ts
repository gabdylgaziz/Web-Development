import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  newProducts = products;

  share(name: string, url: string) {
    window.location.href = `https://t.me/share/url?url=Купи ${name} по очень выгодной цене!&text=${url}`
  }

  del(id: number){
    const nP = []
    for(let i = 0; i < this.newProducts.length; i++){
      if(this.newProducts[i].id != id){
        nP.push(this.newProducts[i])
      }
    }
    this.newProducts = nP
  }
  
  like(id: number){
    for(let i = 0; i < products.length; i++){
      if(products[i].id == id){
        if(!products[i].liked){
          products[i].likes+=1
          products[i].liked = true
          break
        }
      }
    }
  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/