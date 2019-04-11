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
  

 ngOnInit() {
   
  }
  constructor(private ag : AuthGuard,private _formBuilder: FormBuilder,private router: Router ) { }
  
 

   logout()
  {
    this.ag.token=false;
  }




}
