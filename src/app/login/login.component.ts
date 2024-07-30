import { Component, OnInit } from '@angular/core';
import { GameTypesService } from '../game-types.service';
import { Router } from '@angular/router';
interface User{
  userId:number,
  userName:string,
  userPassword:string,
  userEmail:string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users:User[]=[];

  constructor(private _users:GameTypesService, private route:Router) { }

  ngOnInit(): void {
    this.users = this._users.getUserList();
  }

  onSubmit(formData:any){
    console.log(formData.value)
    const {Username,Password} = formData.value;
    console.log(Username,Password)
    const user = this.users.find(u=> u.userName == Username && u.userPassword == Password);
    if(user){
      this._users.logdinUser=Username;
      this.route.navigate(['/Home']);
    }
    else{
      alert("Wrong Username and Password");
    }

  }
}
