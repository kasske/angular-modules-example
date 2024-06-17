import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, SharedModule, FormsModule ],
  exports: [TasksComponent], // only this is used in app module, others are internal
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  providers: [],
})
export class TasksModule {}
