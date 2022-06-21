// const TicketList = require('./ticket-list.js');

class Sockets {

    constructor( io ) {

        this.io = io;

        //crear instancia del ticketList para acceder a sus propiedades y ser usadas por los eventos socket
        //this.ticketList = new this.TicketList();


        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log( 'cliente conectado react' );

            //Emitir al cliente conectado las bandas actuales
            // socket.emit('current-bands', this.bandList.getBands() );



            // // Escuchar evento: mensaje-to-server
            socket.on('dato-turno-server', ( data ) => {
              
              
                   console.log( data );
                this.io.emit('dato-turno-server', data );
             });

            //  socket.on('solicitar-ticket', ( data ) => {
            //     console.log( data );
            //    this.io.emit('solicitar-ticket', data );
            // });
            
        
        });
    }

 
}


module.exports = Sockets;