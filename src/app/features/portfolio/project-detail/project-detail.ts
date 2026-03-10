import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.scss'],
})
export class ProjectDetail implements OnInit {
  project?: Project;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = PROJECTS.find(p => p.id === id) ?? undefined;
  }

  goBack(): void {
    this.location.back();
  }
}