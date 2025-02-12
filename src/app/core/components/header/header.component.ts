import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleCasePipe,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items = [
    {
      name: 'shop',
      router: '/shop'
    },
    {
      name: 'stores',
      router: '/stores'
    },
    {
      name: 'about',
      router: '/about'
    },
    {
      name: 'login',
      router: '/login'
    }
  ]
}
