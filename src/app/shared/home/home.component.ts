import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  // ngAfterViewInit(): void {
  //   // Ensure the carousel functionality is initialized
  //   const carouselElement = document.getElementById('header-carousel');
  //   if (carouselElement) {
  //     new bootstrap.Carousel(carouselElement);
  //   }
  // }

}
