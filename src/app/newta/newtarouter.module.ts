import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewtaComponent } from './newta.component';
import { MessageService } from 'primeng/api/messageservice';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NewtaComponent }
	])],
	exports: [RouterModule]
})
export class NewTaRouterModule { 

}
