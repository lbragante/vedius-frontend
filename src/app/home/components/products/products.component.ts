import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private serviceProduct: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.serviceProduct.getProducts();
  }

  addCart(product: Product): void {
    this.serviceProduct.addCart(product).subscribe(
      (product) => {
        console.log(product);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
