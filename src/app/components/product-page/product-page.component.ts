import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id: number;
  product: any;
  constructor(private API: APIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
    });
    this.API.getProduct(this.id).subscribe((product) => {
      console.log(product);

      this.product = product;
    });
  }
}
