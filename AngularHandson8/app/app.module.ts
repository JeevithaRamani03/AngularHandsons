import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

import { SiblingComponent } from './sibling/sibling.component';
import{RouterModule,Routes} from '@angular/router';

const routes:Routes=[
 {path:'Parent',component:ParentComponent},
 {path:'Sibling',component:SiblingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
