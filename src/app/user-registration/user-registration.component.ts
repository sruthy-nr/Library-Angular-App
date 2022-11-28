import { Component } from '@angular/core';

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
  }

}
