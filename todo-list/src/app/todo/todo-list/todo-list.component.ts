import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  titlePage = "Ma Todo-list";

  taskTitle = '';
  taskAuthor = '';
  nextId = 1;

  tasks: {
    id: number;
    title: string;
    author: string;
    completed: boolean;
  }[] = [];

  addTask() {
    const title = this.taskTitle.trim();
    const author = this.taskAuthor.trim();
    if (!title || !author) return;

    this.tasks.push({
      id: this.nextId++,
      title,
      author,
      completed: false,
    });

    this.taskTitle = '';
    this.taskAuthor = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleCompleted(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }
}
