import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'varuns-app';
  check;

  constructor(private router:Router)
  {

  }

  ngOnInit(){
   
    // this.check=sessionStorage.getItem('home_content');
    // if(!this.check)
    // {
    //   this.check=true;
    //   sessionStorage.setItem('home_content',this.check.toString());
    // }
    // else
    // {
    //   if(this.check=="true")
    //        this.check=true;
    //   else
    //     this.check=false;
            
    // }
     
    // console.log(this.check);



  }
  

}
