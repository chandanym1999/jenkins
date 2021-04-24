import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartcount:number;
  constructor(private productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.cartcount=this.productservice.getcartcount();
  }

}
