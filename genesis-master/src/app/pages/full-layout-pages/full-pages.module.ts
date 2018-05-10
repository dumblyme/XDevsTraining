import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { MysteryNumberComponent } from './mystery-number/mystery-number.component';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        NgbModule,
        FormsModule
    ],
    declarations: [       
        AboutMeComponent,
        TodoListComponent,
        MainDashboardComponent,
        MysteryNumberComponent
        
    ]
})
export class FullPagesModule { }
