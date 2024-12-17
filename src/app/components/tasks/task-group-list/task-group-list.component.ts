import { Component } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';

@Component({
  selector: 'app-task-group-list',
  standalone: false,

  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent {
  tasksGroupList: TaskGroups[] = TASKGROUPSLIST;
}
