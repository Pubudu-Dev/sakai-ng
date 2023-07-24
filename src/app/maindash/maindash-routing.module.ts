import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaindashComponent } from './maindash.component.';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MaindashComponent }
    ])],
    exports: [RouterModule]
})
export class MaindashRoutingModule { }
