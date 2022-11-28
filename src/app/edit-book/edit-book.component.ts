import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  title=""

  edit=()=>{
    let editbook:any={
      "title":this.title
    }
    console.log(editbook)
  }
}
