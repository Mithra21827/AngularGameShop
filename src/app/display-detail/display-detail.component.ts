import { Component, OnInit,Input } from '@angular/core';

interface Gamedetails{
  gameId:number,
  gameTitle:string,
  gameImgUrl:string,
  gameAbout:string,
  gameGener:string,
  gameRating:number,
  gameTrilerUrl:string
}

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  @Input() detaildData:Gamedetails={
    gameId:0,
    gameTitle:'',
    gameImgUrl:'',
    gameAbout:'',
    gameGener:'',
    gameRating:0,
    gameTrilerUrl:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  
}
