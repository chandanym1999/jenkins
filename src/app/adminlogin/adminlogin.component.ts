import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:string;
  password:string;
  originalun:string="admin";
  originalpw:string;
  checkval:number=0;
  
  constructor(private productservice:ProductserviceService,private router:Router){}
  ngOnInit(): void {
    this.originalpw=this.productservice.getpassword();
  }
  
  check(){
    if(this.username==this.originalun && this.password==this.originalpw){
      this.checkval=1;
      this.router.navigate(['/adminhome'])
    }else{
      this.checkval=0;
      alert("wrong password");
    }
    
  }
}
