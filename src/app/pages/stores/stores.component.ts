import { Component, inject} from '@angular/core';
import { TodoServiceService } from '../../core/services/todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent {
 todoList:any;
  #todoService=inject(TodoServiceService);
  constructor() {
    this.#todoService.getTodos().subscribe({
      next: (res: any) => {
        console.log('success', res);
        console.log('Received todos:', res.todos.length);
        this.todoList=res.todos;
      },
      complete: () => {},
      error: () => {}
    });
   }

   ngOnInit():void{
    console.log('Component initialized');
   }
}
