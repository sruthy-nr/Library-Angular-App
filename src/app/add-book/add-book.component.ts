import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  title=""
  author=""
  descr=""
  publish=""
  lang=""
  dist=""
  released=""
  price=""
  img=""


  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={
      "title":this.title,
      "author":this.author,
      "descr":this.descr,
      "publish":this.publish,
      "lang":this.lang,
      "dist":this.dist,
      "released":this.released,
      "price":this.price,
      "img":this.img
    }
    console.log(data)
    this.api.addBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Successfully Added")
          this.title=""
          this.author=""
          this.descr=""
          this.publish=""
          this.lang=""
          this.dist=""
          this.released=""
          this.price=""
          this.img=""
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }

  
}
