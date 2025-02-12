import { Component } from '@angular/core';
import { HeroShopComponent } from "../../shared/components/hero-shop/hero-shop.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
