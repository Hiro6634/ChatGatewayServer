import { Controller, Get, Render } from "@nestjs/common";
import { ChatGateway } from "./chat.gateway";

@Controller()
export class ChatController {
    constructor( private chatGateway: ChatGateway){}

    @Get()
    @Render('chat')
    chat() {}

    @Get('send')
    send(){
        this.chatGateway.sendMessage('Hello from server!');
        return 'Message sent';
    }
}