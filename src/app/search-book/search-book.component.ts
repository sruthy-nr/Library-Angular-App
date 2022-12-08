import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  constructor(private api:ApiService,private route:Router){}
  title=""
  searchdata:any=[]
  readValues=()=>{
    let data:any={
      "title":this.title
    }
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
  
          alert("invalid book title")
          
        } else {
          this.searchdata=response
        }
      }
    )
  }
  deletebuttonclick=(id:any)=>{
  
    let data:any={
      "id":id
    }
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
  
          alert("Deleted successfully");
          this.route.navigate(['/view'])
        } 
        else {
        
          alert("invalid input");
        }
      }
    )
  
  }
}
