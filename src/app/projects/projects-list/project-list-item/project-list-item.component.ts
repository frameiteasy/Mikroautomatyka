import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {

  }

  onViewBOM() {

  }

  onViewPandP() {

  }
}
