import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Interface } from 'readline';

export interface IProduct {
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
  Products: IProduct[] = [
  { name: 'TV', price: 1000, img: 'assets/images/angular.png' },
  { name: 'Laptop', price: 1500, img: 'assets/images/angular.png' },
  { name: 'Screen', price: 300, img: 'assets/images/angular.png' }
];
  Products2: object[]= [
    {name: 'TV', price: 10000, img: 'tv.jpg'},
    { name: 'Laptop', price: 1500, img: 'laptop.jpg' },
    { name: 'Screen', price: 300, img: 'screen.jpg' },
  ]

}
