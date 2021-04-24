import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';



@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  height:number=150;
  width:number=200;
  search:string;
  searchval:number=0;
  res:any[]=[];
  radius:number=10;
  cards = [];
  searchedKeyword: string;

  constructor(private productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.cards=this.productservice.getproduct();
  }
 delete(title:string){
   for(var i=0;i<this.cards.length;i++){
     if(this.cards[i].title==title){
       this.cards.splice(i,1);
     }
   }
   
 }

}
