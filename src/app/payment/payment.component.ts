import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import * as jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  customer:any[];
  cart:any;
  amount:number;
  length1:number;
  payment:string;

  constructor(private productservice:ProductserviceService,private route:Router) { }

  ngOnInit(): void {
    this.customer=this.productservice.getcustomer();
    this.cart=this.productservice.getcartproduct();
    this.amount=this.productservice.getamount()
    this.length1=this.productservice.getcartcount();
    this.payment=this.productservice.getpayment();
  }
  back(){
    this.route.navigate(['/home']);
  }
  

}
