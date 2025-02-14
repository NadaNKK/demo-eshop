import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-shop',
  standalone: true,
  imports: [],
  templateUrl: './hero-shop.component.html',
  styleUrl: './hero-shop.component.scss'
})
export class HeroShopComponent {

  constructor(private router: Router) { }

  navigateToProducts() {
    this.router.navigate(['/shop']);
  }
}
