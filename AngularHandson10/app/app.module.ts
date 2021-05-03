import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductMasterService} from './product-master.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [ProductMasterService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
