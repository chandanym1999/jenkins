import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private amount:number;
  private payment:string;
  private password:string="admin123";
  private id:number=15;
  private cart:any[]=[];
  private product:any[]=[
    {
      id:1,
      title: 'Onion',
      price:20 ,
      img: '../../assets/images/onion.jpg'
    },
    {
      id:2,
      title: 'pumpkin',
      price:30 ,
      img: '../../assets/images/pumpkin.jpg'
    },
    {
      id:3,
      title: 'pea',
      price:25,
      img: '../../assets/images/pea.jpg'
    },
    
    {
      id:5,
      title: 'corn',
      price:10 ,
      img: '../../assets/images/corn.jpg'
    },
    {
      id:6,
      title: 'carrot',
      price:20 ,
      img: '../../assets/images/carrot.jpg'
    },
    {
      id:7,
      title: 'spinach',
      price:10 ,
      img: '../../assets/images/spinach.jpg'
    },
    {
      id:8,
      title: 'tomato',
      price:20 ,
      img: '../../assets/images/tomato.jpg'
    },
    {
      id:9,
      title: 'turnip',
      price:20 ,
      img: '../../assets/images/turnip.jpg'
    },
    {
      id:10,
      title: 'bitter gourd',
      price:20 ,
      img: '../../assets/images/bitter.jpg'
    },
    {
      id:11,
      title: 'raddish',
      price:30 ,
      img: '../../assets/images/raddish.jpeg'
    },
    {
      id:12,
      title: 'ginger',
      price:30 ,
      img: '../../assets/images/ginger.jpg'
    },
    {
      id:13,
      title: 'coriander',
      price:10 ,
      img: '../../assets/images/coriander.jpg'
    },
    {
      id:14,
      title: 'cucumber',
      price:20 ,
      img: '../../assets/images/cucumber.jpg'
    },
    {
      id:15,
      title: 'mushroom',
      price:30 ,
      img: '../../assets/images/mushroom.jpg'
    },
  ];
  private customer:any[]=[
  ];

  
  constructor() { 
    
  }

  setcart(data){
    this.cart=data;
    console.log(this.cart);
    
  }
  setpayment(data){
    this.payment=data;
  }
  getpayment(){
    return this.payment;
  }
  getcustomer(){
    return this.customer
  }
  setcust(data){
    this.customer.push(data);
  }
  addtocart(id){
    for(var i=0;i<this.product.length;i++){
      if(this.product[i].id===id){
        this.cart.push(this.product[i]);
      }
    }
  }
  getcartcount():number{
    return this.cart.length;
  }
  deletecart(data){
    for(var i=0;i<this.cart.length;i++){
      if(this.cart[i].id==data){
        this.cart.splice(i,1);
      }
    }
  }
  setamount(data){
    this.amount=data;
  }
  getamount():number{
    return this.amount;
  }
  getcartproduct():any[]{
    console.log(this.cart)
    return this.cart;
  }
  getid(){
    this.id=this.id+1;
    return this.id;
  }
  addproduct(data:any[]){
    this.product.push(data);
    alert("Successfully added the product!!! check out the list...");
  }
  resetpassword(data){
    console.log(data);
    this.password=data
  }
  getpassword(){
    return this.password;
  }
  
  getproduct():any[]{
    return this.product;
  }
  
  getproductdetail(id:number):any[]{
    const productdetail=this.product.find(productdetail=>productdetail.id===id);
    return productdetail;
  }

  
}
