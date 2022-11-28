import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  name=""
  title=""
  doi=""
  member=""

  issue=()=>
  {
    let issuebook:any={
      "name":this.name,
      "title":this.title,
      "doi":this.doi,
      "member":this.member
    }
    console.log(issuebook)
  }

}
