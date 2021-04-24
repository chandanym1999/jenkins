import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-adminreset',
  templateUrl: './adminreset.component.html',
  styleUrls: ['./adminreset.component.css']
})
export class AdminresetComponent implements OnInit {
  username:string;
  password:string;
  newpassword:string;
  password1:string;
  newpassword2:string;
  msg:string;
  
  constructor(private productservice:ProductserviceService,private route:Router) {

  }
  reset(){
    this.password1=this.productservice.getpassword()
    if(this.newpassword===this.newpassword2){
      
      if(this.password==this.password1){
        this.productservice.resetpassword(this.newpassword);
        alert("Password reset successful!!! Login again");
        this.route.navigate(['/admin']);
      }
      else
        alert("Old password does not match");
    }
    else
      alert("New password does not match");
  }
  ngOnInit(): void {
  }

}
