import { EmployeeService } from './employee.service';
import { Employee } from './../models/employees';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees:Employee[]=[];
  customers1: Customer[] = [];
  loading: boolean = true;
  representatives: Representative[] = [];
  statuses: any[] = [];
  activityValues: number[] = [0, 100];
  
  @ViewChild('filter') filter!: ElementRef;

  ngOnInit(){

    this.employeeService.getEmployees().subscribe(
      data=>{
        this.employees=data;
      }
    )

    this.customerService.getCustomersLarge().then((customers: Customer[]) => {
      this.customers1 = customers;
      this.loading = false;
      
      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
  
  
      
  
    });


  this.representatives = [
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
];


this.statuses = [
  { label: 'Unqualified', value: 'unqualified' },
  { label: 'Qualified', value: 'qualified' },
  { label: 'New', value: 'new' },
  { label: 'Negotiation', value: 'negotiation' },
  { label: 'Renewal', value: 'renewal' },
  { label: 'Proposal', value: 'proposal' }
];
  }


  constructor(private customerService:CustomerService,private employeeService :EmployeeService){

  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}


clear(table: Table) {
  table.clear();
  this.filter.nativeElement.value = '';

}

}
