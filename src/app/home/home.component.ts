import { Component, OnInit } from '@angular/core';
import { GameTypesService } from '../game-types.service';

interface GameGener{
  generId :number,
  gameGener:string,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gameTypes:GameGener[] = [];
  gameGener:string = '';
  logdingUser :string='';
  constructor(private _gameType:GameTypesService) { }

  ngOnInit(): void {
    this.gameTypes = this._gameType.getGames();
    this.logdingUser = this._gameType.logdinUser;
  }

  setGameGener(gener:string){
    this.gameGener = gener;
  }
}
