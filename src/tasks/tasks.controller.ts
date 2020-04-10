import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService ){ }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ): Task {
        return this.tasksService.createTask(title, description);

        // console.log('body', Body);
        // console.log('title', title)
        // console.log('description', description)
    }

    // @Post()
    // createTask(@Body() body) {
    //     console.log(1, 'body', body);
    // }



}
