import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../shared/components/sub-header/sub-header.component";
import { ProductsListComponent } from "../../shared/components/products-list/products-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [SubHeaderComponent, ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
