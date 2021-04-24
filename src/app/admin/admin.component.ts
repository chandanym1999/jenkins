import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  height:number=200;
  width:number=75;
  radius:number=10;
  constructor() { }

  ngOnInit(): void {
  }

}
