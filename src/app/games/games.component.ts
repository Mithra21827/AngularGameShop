import { Component, OnInit,Input} from '@angular/core';
import { GameTypesService } from '../game-types.service';

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
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
  url="https://5.imimg.com/data5/SELLER/Default/2021/4/XH/FP/CC/2912323/call-of-duty-ghosts-ps3--1000x1000.jpg";
  itemsPerSlide = 4;

  @Input() type:string = '';

  gameDetialsData:Gamedetails ={
      gameId:0,
      gameTitle:'',
      gameImgUrl:'',
      gameAbout:'',
      gameGener:'',
      gameRating:0,
      gameTrilerUrl:''
    };
    
  public gameDetails:Gamedetails[]=[];
  public gameFilter:Gamedetails[]=[];
  constructor(private _gameDetails:GameTypesService) { }

  ngOnInit(): void {
    this.gameDetails = this._gameDetails.getGameDetails();
  }

  getSlides(): Gamedetails[][] {
    if(this.type !== ''){
      this.gameFilter = this.gameDetails.filter(e=>e.gameGener==this.type);
    }
    else{
      this.gameFilter = this.gameDetails;
    }
    const slides: Gamedetails[][] = [];
    for (let i = 0; i < this.gameFilter.length; i += this.itemsPerSlide) {
      slides.push(this.gameFilter.slice(i, i + this.itemsPerSlide));
    }
    return slides;
  }

  displayData(value:Gamedetails){
    this.gameDetialsData = value;
  }


}
