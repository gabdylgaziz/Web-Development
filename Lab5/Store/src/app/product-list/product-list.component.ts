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
    
  }
  
  like(){
    console.log(this.newProducts)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/