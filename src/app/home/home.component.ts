import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  h1Style: boolean = false;
  users: Object;

  constructor(private data: DataService ) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data;
      console.log(data);
    })
  }

  firstClick()
  {
    console.log('click me')
    //this.h1Style = true;
    
  }

}
