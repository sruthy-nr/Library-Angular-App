import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  title=""

  delete=()=>{
    let deletebook:any={
      "title":this.title
    }
    console.log(deletebook)
  }
}
