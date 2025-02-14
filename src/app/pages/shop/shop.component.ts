import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../shared/components/sub-header/sub-header.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [SubHeaderComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
