import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {

  constructor() { }
  private tasksGroupList: TaskGroups[] = TASKGROUPSLIST;

  /**
   *
   * @returns TasksGroups[]
   */
  public getTasksGroupList = (): TaskGroups[] => this.tasksGroupList;

  public addTask(data: Task | TaskGroups) {
    if (data) {
      if ('titreTask' in data) {
        // Cas où un Task est ajouté dans un groupe existant
        this.tasksGroupList.forEach(tasksGroup => {
          if (tasksGroup.id == data.id) {
            tasksGroup.task.push({
              id: tasksGroup.id + '.' + (tasksGroup.task.length + 1),
              titreTask: data.titreTask,
              statut: data.statut
            });
          }
        });
        console.log('Task added to group:', this.tasksGroupList);
      } else if ('titreGroupTasks' in data) {
        // Cas où un nouveau groupe de tâches est ajouté
        this.tasksGroupList.push({
          id: '' + (this.tasksGroupList.length + 1),
          titreGroupTasks: data.titreGroupTasks,
          task: [],
          statut: false
        });
        console.log('New task group added:', this.tasksGroupList);
      }
    }
  }
}
