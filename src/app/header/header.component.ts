import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check;
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/mainpage']);
  
  }

  // addusers()
  // { this.check=false;
  //   sessionStorage.setItem('home_content',this.check.toString());
  //   this.router.navigate(['/adduser']);
  //   console.log(this.check);
  // }

  // viewusers()
  // { 
  //   this.check=false;
  //   sessionStorage.setItem('home_content',this.check.toString());
  //   this.router.navigate(['/userlist']);
  //   console.log(this.check);

  // }

}
