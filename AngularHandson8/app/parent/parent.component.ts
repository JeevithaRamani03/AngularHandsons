import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataService } from "../data.service";
import {Data} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy {

  message:string;

  subscription: Subscription;
  constructor(private data: DataService) { }

  ngOnInit() 
  {

   this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  }

  ngOnDestroy() 
  {

   this.subscription.unsubscribe();

  }

}
