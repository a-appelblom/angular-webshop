import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showMovieList: boolean;
  categories: any;
  products: any;
  productsByCategory: any;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    });
    this.api.getProducts().subscribe((products) => {
      console.log(products);
    });
  }
}
