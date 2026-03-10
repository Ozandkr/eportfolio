import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from './projects';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects: Project[] = PROJECTS;

  trackById(index: number, p: Project): string {
    return p.id;
  }
}
