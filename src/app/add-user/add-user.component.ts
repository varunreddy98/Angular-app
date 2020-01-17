import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userform;
  temp;
  constructor() { }

  ngOnInit() {

    this.userform =new FormGroup({

      firstname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      lastname: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      age: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.max(120),Validators.min(10)]),
      tel:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      dob: new FormControl('',[Validators.required]) 
    });
  }
  onSubmit(){
  this.temp=JSON.parse(sessionStorage.getItem('users57'));
  if(!this.temp)
    this.temp={};
  this.temp[this.userform.value.tel]=this.userform.value;
  sessionStorage.setItem('users57',JSON.stringify(this.temp));
  }

}
