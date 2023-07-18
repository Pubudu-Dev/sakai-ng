import { Product } from '../demo/api/product';
import { ProductService } from './../demo/service/product.service';
import { Component, OnInit } from '@angular/core';


interface expandedRows {
  [key: string]: boolean;
}

@Component({

  templateUrl: './tadashboard.component.html',
 
  
})



export class TadashboardComponent implements OnInit {
  isExpanded: boolean = false;

  products: Product[] = [];
  expandedRows: expandedRows = {};






  expandAll() {
    if (!this.isExpanded) {
        this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
        this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
}



constructor(private productService:ProductService){
    
}
  ngOnInit(): void {
     this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
  }
}


