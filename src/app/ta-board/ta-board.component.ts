import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../demo/api/product';
import { ProductService } from '../demo/service/product.service';
import { TandARow } from '../models/tandarow';
import { TaserviceService } from './taservice.service';
import { Table } from 'primeng/table';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  
  templateUrl: './ta-board.component.html'
 
})
export class TaBoardComponent implements OnInit{
  isExpanded: boolean = false;

  loading: boolean = true;
  expandedRows: expandedRows = {};
  tandAs: TandARow[] = [];
  @ViewChild('filter') filter!: ElementRef;






  expandAll() {
    if (!this.isExpanded) {
        this.tandAs.forEach(product => product && product.id ? this.expandedRows[product.id] = true : '');

    } else {
        this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
}



constructor(private productService:ProductService,private tandAService:TaserviceService){
    
}
  ngOnInit(): void {
    
     
     this.tandAService.getTandA().subscribe(
      data=>{
        this.tandAs=data;
      }
    )

    this.loading=false
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}
}
