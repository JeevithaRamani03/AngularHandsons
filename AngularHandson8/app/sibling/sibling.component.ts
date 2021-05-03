import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from "../data.service";
import {Data} from '@angular/router';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit,OnDestroy {

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
  newMessage() {

    this.data.changeMessage("Hello from Sibling")
    
  }

}
