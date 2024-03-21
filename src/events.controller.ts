import { Controller, Patch, Get, Post, Delete, Param, Body, HttpCode } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";



@Controller('/events')
export class EventsController{

    @Get()
    findAll(){
        return [
            {id: 1, name: "first event"},
            {id: 2, name: "second event"}
        ]
    }
    
    @Get(':id')
    findOne(@Param('id')id){
        return  {id: 1, name: "first event"}
    
    }
        
    @Post()
    create(@Body() input: CreateEventDto){
        return input
    }

    @Patch(':id')
    update(@Param('id')id, @Body() input: UpdateEventDto,){
        return input;
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id')id){  }


}