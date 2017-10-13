import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  custIndex: number;

  constructor(private projectsService: ProjectsService,
              private customersService: CustomersService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params
      .subscribe(
        (params: Params) => {
          this.custIndex = +params['id'];
          this.projects = this.customersService.getProjectsByCustomerIndex(this.custIndex);
        }
      );
  }

  onAdd() {
    console.log(this.route);
    this.router.navigate(['new'], { relativeTo: this.route });

  }

  onRemove() {
    this.projectsService.letRemoveProjects();
  }
}
