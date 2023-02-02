import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'localStorege';
  user:any = new Array() ;


  constructor(){}


  ngOnInit(): void {

  }



  submit(){
    alert("cheak local storage")

    this.user = {
      name:"aniket",
      city:"kerli"
    }

     console.log(this.user);



     localStorage.setItem("login data",JSON.stringify(this.user));


  }
}
