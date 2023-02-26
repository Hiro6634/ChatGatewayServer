import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import * as socketio from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: socketio.Server;
    private logger: Logger = new Logger('ChatGateway');

    handleConnection(socket: socketio.Socket) {
        this.logger.log(`Client connected: ${socket.id}`);
    }

    handleDisconnect(socket: socketio.Socket) {
        this.logger.log(`Client disconnected: ${socket.id}`);
    }

    afterInit(server: socketio.Server) {
        this.logger.log('Socket server initialized');
    }

    sendMessage(message: string){
        this.server.emit('message', message);
    }
}