import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  aadhaar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}
  register=()=>
  {
    let reg:any={
      "name":this.name,
      "aadhaar":this.aadhaar,
      "address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "email":this.email,
      "phone":this.phone,
      "username":this.username,
      "password":this.password,
      "cpassword":this.cpassword
    }
    console.log(reg) 
    this.api.addBook(reg).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Successfully Added")
          this.name=""
          this.aadhaar=""
          this.address=""
          this.pincode=""
          this.dob=""
          this.email=""
          this.phone=""
          this.username=""
          this.password=""
          this.cpassword=""
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
  
}
