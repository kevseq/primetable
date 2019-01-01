import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';



import {DropdownModule} from 'primeng/dropdown';
import { NewcomponentoneComponent } from './newcomponentone/newcomponentone.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcomponentoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      DropdownModule,
      HttpClientModule,
      MultiSelectModule
      
  ],
  providers: [],
  bootstrap: [AppComponent, NewcomponentoneComponent]
})
export class AppModule { }
 