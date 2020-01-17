import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  firstname;
  lastname;
  age;
  dob;
  tel;
  userform;
  temp;
  constructor(private router:Router) { }

  ngOnInit() {
    this.userform =new FormGroup({

      firstname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      lastname: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      age: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.max(120),Validators.min(10)]),
      tel:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      dob: new FormControl('',[Validators.required]) 
    });
  this.firstname=sessionStorage.getItem('firstname');
  this.lastname=sessionStorage.getItem('lastname');
  this.age=parseInt(sessionStorage.getItem('age'));
  this.dob=sessionStorage.getItem('dob');
  this.tel=sessionStorage.getItem('tel');
  this.userform.controls['firstname'].setValue(this.firstname);
  this.userform.controls['lastname'].setValue(this.lastname);
  this.userform.controls['age'].setValue(this.age);
  this.userform.controls['tel'].setValue(this.tel);
  this.userform.controls['dob'].setValue(this.dob);
  
  }

  onSubmit()
  {
    console.log("hello roster");
    console.log(this.userform.value);
    this.temp=JSON.parse(sessionStorage.getItem('users57'));
    //this.userform.value.dob=this.dob;
    if(!this.temp)
      this.temp={};
    this.temp[this.tel]=this.userform.value;
    sessionStorage.setItem('users57',JSON.stringify(this.temp));
    this.router.navigate(['./userlist']);


  }

}
