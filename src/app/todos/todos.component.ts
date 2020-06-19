import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-items.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public items = []
  public secondPage = false;
  public noOfChars = 100;
  public buttonName = "CREATE NEW"

  constructor(private list: TodoItemsService) { }

  ngOnInit(): void {
    this.list.getItems()
        .subscribe(data => this.items = data)
  }

  remove(id){
    this.list.deleteItem(id)
    .subscribe(data => console.log(data))
  }

  addItem (event){
    if(this.buttonName==="CREATE NEW")
    {
      this.buttonName = "ADD NOTE"
      this.secondPage = true;
    }
    else {
      this.buttonName = "CREATE NEW"
      this.addNew(event.target.value)
      console.log('hihihi',event.target.value)
      this.secondPage = false;
    }
  }

  addNew(item){
    this.list.addItem(item)  
        .subscribe(data => console.log(data)) 
  }

  chaneNoOfChars = () => {
    if(this.noOfChars>0)
    this.noOfChars=this.noOfChars-1;
  }

}
