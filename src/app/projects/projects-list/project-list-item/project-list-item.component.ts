import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})

export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  customerIndex: number;
  projectIndex: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.customerIndex = this.route.snapshot.parent.params['id'];
    this.projectIndex = this.index;
  }

  onView() {
    this.router.navigate(['/project', this.customerIndex, this.projectIndex]);
  }

}
