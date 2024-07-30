import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameTypesService } from './game-types.service';
import { GamesComponent } from './games/games.component';
import { combineLatest } from 'rxjs';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"GameTypeService",component:GameTypesService},
  {path:"Game", component:GamesComponent},
  {path:"Display", component:DisplayDetailComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
