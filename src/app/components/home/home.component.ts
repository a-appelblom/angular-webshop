import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

  constructor(private API: APIService) {}

  ngOnInit(): void {
    this.API.getProducts().subscribe(this.observer);
  }
}
