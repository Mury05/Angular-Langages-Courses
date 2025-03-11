import { Component, EventEmitter, Input } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';
import { Task } from '../../../models/task';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-task-group-list',
  standalone: false,

  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent {
  tasksGroupList: TaskGroups[] = [];
  // @Input() sendNewTaskGroup!: TaskGroups;


  private _sendNewTaskGroup!: TaskGroups;
  @Input()
  set sendNewTaskGroup(value: TaskGroups) {
    this._sendNewTaskGroup = value;
    this.taskGroupsListService.addTask(value);
  }
  get sendNewTaskGroup(): TaskGroups {
    return this._sendNewTaskGroup;
  }

  constructor(private taskGroupsListService: TaskGroupsListService) {
  }

  ngOnInit(): void {
    this.tasksGroupList = this.taskGroupsListService.getTasksGroupList();
  }
  
  add(task: Task) {
    this.taskGroupsListService.addTask(task);
  }

}
