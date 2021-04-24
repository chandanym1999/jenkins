import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any[]=[];
  height:number=150;
  width:number=200;
  radius:number=10;
  quantity:number;
  total:number=0;
  cartlength:number;
  quantity1;
  
  

  constructor(private productservice:ProductserviceService,private route:Router) { }

  

  ngOnInit(): void {
    this.cartlength=this.productservice.getcartcount();
    this.product=this.productservice.getcartproduct();
    for(var i=0;i<this.product.length;i++){
      this.product[i].qprice=this.product[i].price;
    }
    for(var i=0;i<this.product.length;i++){
      this.total=this.total+this.product[i].qprice;
    }
  }

  delete(data){
    this.total=0;
    this.productservice.deletecart(data);
    for(var i=0;i<this.product.length;i++){
      this.total=this.total+this.product[i].qprice;
    }
  }

  calculate(id,number){
    this.total=0;
    for(var i=0;i<this.product.length;i++){
      if(this.product[i].id==id){
        this.product[i].qprice=this.product[i].price*number;
        this.product[i].quantity=number;
      }
    }
    for(var i=0;i<this.product.length;i++){
      this.total=this.total+this.product[i].qprice;
    }
  }
  buy(){
    this.productservice.setcart(this.product);
    this.productservice.setamount(this.total+(this.total*0.1));
    this.route.navigate(['/buy']);
  }
  
}
