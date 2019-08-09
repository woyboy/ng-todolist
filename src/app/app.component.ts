import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LET\'S DO THIS SHIT!';
  intro = 'Keep track of all the shit you are going to do today!';
  step1 = 'Enter new shit using the field below.';
  step2 = 'Then mark shit off when you finish it.';
  taskList: {value: string, complete: boolean}[] = [];

clearInput(): void {
  const clearText = document.querySelector('#new-task') as HTMLInputElement;
  clearText.value = '';
}

addNewTask(): void {
  const newTask = document.querySelector('#new-task') as HTMLInputElement;
  const newTaskValue = newTask.value;
  this.taskList.push({value: newTaskValue, complete: false});
  this.clearInput();
}

taskIsDone(index: number): void {
  this.taskList[index].complete = !this.taskList[index].complete;
}

clearTasks(startingElement: number, numberOfElements: number): void {
  this.taskList.splice(startingElement, numberOfElements);
}

printToConsole() {
  let i = 0;
  for (i; i < this.taskList.length; i++) {
    console.log(this.taskList[i]);
  }
}
}




