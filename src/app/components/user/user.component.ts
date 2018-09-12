import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['write code', 'watch movies', 'Listen to music'];
  }

  onClick() {
    this.name= 'Jose Lopez';
    this.hobbies.push('New Hobby');
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}
