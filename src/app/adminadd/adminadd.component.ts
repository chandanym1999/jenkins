import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
  name:string;
  price:number;
  url:string="../../assets/images/veg.jpg"
  image:File=null;
  arr={} as any;
  id:number;
  constructor(private http:HttpClient,private productservice:ProductserviceService,private route:Router) { }
  onfilechange(event){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

  
  add(){
    this.id=this.productservice.getid();  
    this.id=this.id;
    this.arr.id=this.id;
    this.arr.title=this.name;
    this.arr.price= +this.price;
    this.arr.img=this.url;
    this.productservice.addproduct(this.arr);
    this.route.navigate(['/adminhome']);
  }
  

  ngOnInit(): void {
  }

}
