import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  testArray = [
    { title: 'hello' },
    { title: 'hello2' },
    { title: 'hello3' },
    { title: 'hello4' },
  ];

  testArrayTwo = ['Fan', 'Vafan', 'Skit'];
  complete: boolean;
  products: any[];
  observer = {
    next: (x) => {
      console.log(x);
      this.products = x;
    },
    error: (err) => console.log(err),
    complete: () => (this.complete = true),
  };

  logger(): void {
    console.log(this.products);
  }

  constructor(private API: APIService) {}

  ngOnInit(): void {
    this.logger();
    this.API.getData().subscribe(this.observer);
    this.logger();
  }
}
