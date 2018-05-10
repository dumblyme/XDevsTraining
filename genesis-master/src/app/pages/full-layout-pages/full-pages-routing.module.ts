import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MysteryNumberComponent } from './mystery-number/mystery-number.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'about-me',
        component: AboutMeComponent,
        data: {
          title: 'SSSSS'
        }
      }
    ]
  },

  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: MainDashboardComponent,
        data: {
          title: 'SSSSS'
        }
      }
    ]
  },

  {
    path: '',
    children: [
      {
        path: 'mystery-number',
        component: MysteryNumberComponent,
        data: {
          title: 'Mystery Number'
        }
      }
    ]
  },

  {
    path: '',
    children: [
      {
        path: 'todo-list',
        component: TodoListComponent,
        data: {
          title: 'Todo List'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
