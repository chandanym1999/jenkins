import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  height:number=200;
  width:number=75;
  searchedKeyword: string;
  res:any[]=[];
  radius:number=10;
  cards:any[] = [];
  cartcount:number;
  
  constructor(private productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.cards=this.productservice.getproduct();
    
  }
 

addtocart(id){
  this.productservice.addtocart(id);
  this.cartcount=this.productservice.getcartcount();
  alert("Added to cart...")
}

 

}
