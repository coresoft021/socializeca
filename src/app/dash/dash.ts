import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.html',
  styleUrls: ['./dash.css']
})
export class DashComponent  {
  
 view : boolean = false;
 ngOnInit() {
    this.get_subs()
  }
  constructor(private ag : AuthGuard,private _formBuilder: FormBuilder,private router: Router ) { }
  
 
get_subs()
  {
    
  } 
   logout()
  {
    this.ag.token=false;
  }




}
