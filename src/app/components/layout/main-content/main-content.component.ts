import { Component, EventEmitter, Output } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-main-content',
  standalone: false,

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  newTaskGroup!: TaskGroups;

  sendToChild(task: Task){
    console.log(task);

    this.newTaskGroup = {
      id: task.id,
      titreGroupTasks: task.titreTask,
      task: [],
      statut: task.statut
    }
}
}
