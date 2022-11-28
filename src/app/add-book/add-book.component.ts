import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  title=""
  author=""
  desc=""
  publish=""
  lang=""
  dist=""
  release=""
  price=""
  img=""

  add=()=>
  {
    let add:any={
      "title":this.title,
      "author":this.author,
      "desc":this.desc,
      "publish":this.publish,
      "lang":this.lang,
      "dist":this.dist,
      "release":this.release,
      "price":this.price,
      "img":this.img
    }
    console.log(add)
  }
}
