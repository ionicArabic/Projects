import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Interface } from 'readline';

export interface Product {
  name: string;
  price: number;
  img: string;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  Products: Product[] = [
  { name: 'TV', price: 1000, img: 'tv.jpg' },
  { name: 'Laptop', price: 1500, img: 'laptop.jpg' },
  { name: 'Screen', price: 300, img: 'screen.jpg' }
];

}
