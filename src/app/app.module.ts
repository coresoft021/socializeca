import 'reflect-metadata';
import '../polyfills';
import 'hammerjs'; 


import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { NguiAutoCompleteModule } from '@ngui/auto-complete'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { HomeComponents } from './home/home';
import { Bill_b2b } from './bill/b2b/main';

import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { UpdateService } from './services/update.service';
import { AuthenticationService } from './services/login.service';


import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {
  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

@NgModule({
  imports:      [ BrowserModule,NguiAutoCompleteModule,
  FormsModule,BrowserAnimationsModule,HttpModule,
  AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    MatAutocompleteModule, A11yModule,
    CdkTableModule,
    ScrollingModule,
    CdkTreeModule,
    DragDropModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule, ],
  declarations: [ AppComponent, LoginComponent,DashComponent,HomeComponents,Bill_b2b ],
   providers: [AuthenticationService,AuthGuard,DataService,UpdateService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
