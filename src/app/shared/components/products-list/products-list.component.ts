import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
 productList=[
  {
    "name": "Nike Air Max",
    "price": 129,
    "size": 'M',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Adidas Superstar",
    "price": 99,
    "size": 'L',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Converse Chuck Taylor",
    "price": 69,
    "size": 'XL',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Vans Old Skool",
    "price": 79,
    "size": 'L',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Reebok Classic Leather",
    "price": 89,
    "size": 'L',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Reebok Leather",
    "price": 189,
    "size": 'XXL',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Reebokok Classic Leather",
    "price": 70,
    "size": 'M',
    "imageUrl": "images/model.jpg"
  },
  {
    "name": "Leather jacket",
    "price": 120,
    "size": 'L',
    "imageUrl": "images/model.jpg"
  }
];
}
