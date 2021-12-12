import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private serviceCart: CartService) { }

  ngOnInit() {
    this.products$ = this.serviceCart.getProductsCart();
    // console.log(this.products$.subscribe(res => console.log(res)));
  }

}
