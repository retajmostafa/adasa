
import { NavbarComponents } from './navbar/navbar.components';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponents } from './home/home.components';
import { FooterComponents } from './footer/footer.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponents, HomeComponents, FooterComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adasa');
}
