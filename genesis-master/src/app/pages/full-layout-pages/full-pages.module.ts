import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { MysteryNumberComponent } from './mystery-number/mystery-number.component';
import { BibleVerseGeneratorComponent } from './bible-verse-generator/bible-verse-generator.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoListService } from '../../services/todo-list/todo-list.service';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [       
        AboutMeComponent,
        TodoListComponent,
        MainDashboardComponent,
        MysteryNumberComponent,
        BibleVerseGeneratorComponent    
    ],
    providers:[
        TodoListService
    ]
    
})
export class FullPagesModule { }
