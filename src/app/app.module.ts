import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { TodosComponent } from './todos/todos.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule }    from '@angular/common/http';
import { TodoItemsService } from './todo-items.service'

@NgModule({
  declarations: [
    AppComponent,
    ProfileSectionComponent,
    ProfilePicComponent,
    TodosComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TodoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
