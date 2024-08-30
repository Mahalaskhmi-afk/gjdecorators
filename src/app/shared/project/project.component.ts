import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  filterProjects(filter: string): void {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
      if (filter === '*' || item.classList.contains(filter)) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }

}
