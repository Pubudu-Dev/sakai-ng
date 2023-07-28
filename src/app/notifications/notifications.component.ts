import { Component, OnInit } from '@angular/core';
import { Notification} from '../models/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{
  tobedone: Notification[] | undefined;

  done: Notification[] | undefined;

  draggedProduct: Notification | undefined | null;

   inprogress: Notification[]| undefined;
In: any;

  ngOnInit() {
    this.done = [];
    this.tobedone = [
        {id:1, text: 'Black Watch',priority:0,status:1},
        {id:2, text: 'Bamboo Watch',priority:0,status:1}
    ]
}

dragStart(product: Notification) {
    this.draggedProduct = product;
}



dragEnd() {
    this.draggedProduct = null;
}


dropped_done(){
    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.done = [...(this.done as Notification[]), this.draggedProduct];
        this.inprogress = this.inprogress?.filter((val, i) => i != draggedProductIndex);
        this.tobedone = this.tobedone?.filter((val, i) => i != draggedProductIndex);
        this.draggedProduct = null;
    }
}

dropped_inprogress(){
    if (this.draggedProduct) {  
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.inprogress = [...(this.done as Notification[]), this.draggedProduct];
        this.tobedone = this.tobedone?.filter((val, i) => i != draggedProductIndex);
        this.done = this.done?.filter((val, i) => i != draggedProductIndex);
        this.draggedProduct = null;
    }

}

dropped_to_be_done(){
    if (this.draggedProduct) {
        //typescript code to filter from an array using pro
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.tobedone = [...(this.tobedone as Notification[]), this.draggedProduct];
        this.done = this.done?.filter((val, i) => i != draggedProductIndex);
        this.draggedProduct = null;
    }
}

findIndex(product: Notification) {
    let index = -1;
    for (let i = 0; i < (this.tobedone as Notification[]).length; i++) {
        if (product.id === (this.tobedone as Notification[])[i].id) {
            index = i;
            break;
            
        }
    }

    
    return index;
}
}
