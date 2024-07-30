import { Component, OnInit } from '@angular/core';
import { GameTypesService } from '../game-types.service';


interface User{
  userId:number,
  userName:string,
  userPassword:string,
  userEmail:string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User={
    userId:0,
  userName:'',
  userPassword:'',
  userEmail:'',
  };

  constructor(private _users:GameTypesService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:any){
    console.log(formData.value);
    const {Username, Email, Password} = formData.value;
    const usr = this._users.getUserList().find(u=> u.userName == Username && u.userEmail == Email && u.userPassword==Password);
    if(usr){
      alert("User is already exist! try login")
    }
    else{
      
      this.user = {
        userId:this._users.UserList.length + 1,
        userName:Username,
        userPassword:Password,
        userEmail:Email,
      };  
      this._users.UserList.push(this.user);
    }
  }
} 
