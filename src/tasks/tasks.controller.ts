import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService ){ }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id);

    }


    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto ): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('/:id') id: string): void {
        this.tasksService.deleteTask(id);
    }


//    @Post()
//    createTask(
//        @Body('title') title: string,
//        @Body('description') description: string
//    ): Task {
//        return this.tasksService.createTask(title, description);
//
//        // console.log('body', Body);
//        // console.log('title', title)
//        // console.log('description', description)
//    }

    // @Post() 
    // createTask(@Body() body) {
    //     console.log(1, 'body', body);
    // }



}
