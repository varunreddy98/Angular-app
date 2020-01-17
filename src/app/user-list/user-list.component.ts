import { Component, OnInit,ViewChild } from '@angular/core';
import { Session } from 'protractor';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/popup/popup.component';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { 
  MatSort, 
  MatPaginator, 
  MatTableDataSource } from '@angular/material';
  import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  headElements;
  userform;
  userlist;
  userkeys;
  temp;
  templist=[];
  list;
  val;
  constructor(private  dialog:  MatDialog,private router:Router ) {
    this.userlist=JSON.parse(sessionStorage.getItem('users57'));
    if(this.userlist){
    this.userkeys=Object.keys(this.userlist);
    var c=0;
    for(let k of this.userkeys)
    {
      var temp={}
      temp['firstname']=this.userlist[k].firstname;
      temp['lastname']=this.userlist[k].lastname;
      temp['age']=this.userlist[k].age;
      temp['tel']=this.userlist[k].tel;
      temp['dob']=this.userlist[k].dob;
      this.templist[c]=temp
      c=c+1;
    }
  }
    this.list=this.templist;
   }

    firstnamefun()
    {
      this.list= _.sortBy(this.list,['firstname']);
      //console.log(this.list);
    }
    lastnamefun()
    {
      this.list= _.sortBy(this.list,['lastname']);
      //console.log(this.list);
    }
    agefun()
    {
      this.list= _.sortBy(this.list,['age']);
      //console.log(this.list);
    }
    telfun()
    {
      this.list= _.sortBy(this.list,['tel']);
     // console.log(this.list);
    }
    dobfun()
    {
      this.list= _.sortBy(this.list,['dob']);
      console.log(this.list);
    }
   ngOnInit()
   {
      this.userform =new FormGroup({

      inp: new FormControl(''),
    });
        
   }

  delete(item)
  {
      if(confirm('Are u sure??')){
      this.deletes(item);
      }
  }
  deletes(item)
  { 
    console.log(item);
    this.temp=JSON.parse(sessionStorage.getItem('users57'));
    delete this.temp[item]; 
    sessionStorage.setItem('users57',JSON.stringify(this.temp));
    console.log("clear");
    window.location.reload();
    //this.router.navigate(['/userlist']);
   
  }
  
  edit(firstname,lastname,age,tel,dob)
  {
  
      sessionStorage.setItem('firstname',firstname);
      sessionStorage.setItem('lastname',lastname);
      sessionStorage.setItem('age',age);
      sessionStorage.setItem('dob',dob.toString());
      console.log(dob.toString());
      sessionStorage.setItem('tel',tel);
      this.router.navigate(['/edit']);


  }

  onSearch()
  {
    if(this.userform.value.inp=="")
    { this.userlist=JSON.parse(sessionStorage.getItem('users57'));
    this.userkeys=Object.keys(this.userlist);
    var c=0;
    for(let k of this.userkeys)
    {
      var temp={}
      temp['firstname']=this.userlist[k].firstname;
      temp['lastname']=this.userlist[k].lastname;
      temp['age']=this.userlist[k].age;
      temp['tel']=this.userlist[k].tel;
      temp['dob']=this.userlist[k].dob;
      this.templist[c]=temp
      c=c+1;
    }
    this.list=this.templist;
  }
  else{
    this.val=this.userform.value.inp;
    console.log(this.val);
    this.list=_.filter(this.list, { 'firstname':this.userform.value.inp});
  }
    }
  }

@Pipe({name: 'Datepipe'})
export class Datepipe implements PipeTransform {
  transform(value: string): string {
    var str: string = "";
    var temp=value.split("-");
    console.log(temp);
    str=temp[2]+"/"+temp[1]+"/"+temp[0];
    console.log(str);
    return str;
  }
}

@Pipe({name: 'Agepipe'})
export class Agepipe implements PipeTransform {
  transform(value: string): string {
    return (value+" yrs");
  }
}
 

  
