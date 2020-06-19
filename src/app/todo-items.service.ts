import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './list'
import uuid from 'angular-uuid'

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>('http://0.0.0.0/notes')
  }

  deleteItem(id): Observable<any>{
    return this.http.delete(`http://0.0.0.0/notes/${id}`)
  }

  addItem(item): Observable<any>{
    return this.http.post('http://0.0.0.0/notes',{
      title: item,
      description: 'New item added!',
      // userID: uuid.v4()
    })
  }
}
