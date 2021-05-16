import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullTitle = 'LET\'S DO THIS!';
  abbTitle = 'LDT!';
  intro = 'Keep track of the tasks you are going to finish today!';
  step1 = 'Enter new tasks using the field below.';
  step2 = 'Then mark tasks off after you finish them.';
  taskList: {value: string, complete: boolean}[] = [];
  newTask: any;
  newTaskValue: any;
  time: any;


  addNewTask(): void {
    this.newTask = document.querySelector('#new-task') as HTMLInputElement;
    this.newTaskValue = this.newTask.value;
    this.taskList.push({value: this.newTaskValue, complete: false});
    this.clearInput();

  }

  clearInput(): void {
    const clearText = document.querySelector('#new-task') as HTMLInputElement;
    clearText.value = '';
  }

  taskIsDone(index: number): void {
    this.taskList[index].complete = !this.taskList[index].complete;
  }

  clearTasks(startingElement: number, numberOfElements: number): void {
    this.taskList.splice(startingElement, numberOfElements);
  }

  deleteTask(index: number) {
    const taskToDelete: number = index;
    this.time = setTimeout(() => {
      this.taskList.splice(taskToDelete, 1);
    }, 1000);
  }

  clearTime() {
    clearTimeout(this.time);
  }

  printToConsole() {
    let i = 0;
    for (i; i < this.taskList.length; i++) {
      console.log(this.taskList[i]);
    }
  }

}




