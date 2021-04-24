import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductserviceService } from '../productservice.service';
declare var google:any;
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  amount:number;
  name:string;
  email:string;
  mob:string;
  add1:string;
  add2:string;
  city:string;
  state:string;
  customer={};
  customer1:any[]=[];
  done:number=0;
  payment;
  puy;

  constructor(private productservice:ProductserviceService,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.amount=this.productservice.getamount();
  }
  

  options = {
    "key": "rzp_test_UEVI9vb9umi7Vx", // Enter the Key ID generated from the Dashboard
    "amount": (this.productservice.getamount())*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "EKitchen",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler":function (response){
      alert("Payment is successfull with payment ID: "+response.razorpay_payment_id);
      
  },
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  
  rzp1;


  

  pay(){
    
    if(this.payment=="option1"){
      this.customer["name"]=this.name;
      this.customer["email"]=this.email;
      this.customer["mobile"]=+this.mob;
      this.customer["address"]=this.add1+this.add2+this.city+this.state;
      this.productservice.setcust(this.customer);
      this.productservice.setpayment("Cash On Delivery");
      this.route.navigate(['payment']);
    }else{
      
      this.customer["name"]=this.name;
      this.customer["email"]=this.email;
      this.customer["mobile"]=+this.mob;
      this.customer["address"]=this.add1+" , "+this.add2+" , "+this.city+" , "+this.state;
      this.productservice.setcust(this.customer);
      this.customer1=this.productservice.getcustomer();
      this.productservice.setpayment("Online");  
      console.log(this.customer1);  
      this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
      console.log(this.done);
      this.route.navigate(['/payment']);
  }}
  
  
  
  

}
