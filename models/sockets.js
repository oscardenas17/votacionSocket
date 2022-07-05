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

                //2.recibimos ciudad
            socket.on("room", (ciudad)=>{
                socket.join(ciudad);
                console.log('bacjen recibe',ciudad);
            })

          
            //Emitir al cliente conectado las bandas actuales
            // socket.emit('current-bands', this.bandList.getBands() );
            // socket.on('dato-turno-server', ( data ) => {            
            //     console.log('datos en salas', data );
            //     this.io.to('bucaramanga').emit('dato-turno-server', data );
            //  });

            //recibomos dato de datoTurno
            socket.on('dato-turno-server', ( data ) => {            
                            
                // this.io.to(data.ciudad.txtCentro).emit('envio-turno', data.nombre.txtNombre );
                console.log('enviado back',data.txtCentro);
            
                //enviamos dato a room
               // this.io.to(data.ciudad.txtCentro).emit('respuesta', data)
                socket.to(data.txtCentro).emit('respuesta', data)
             });
            // // Escuchar evento: mensaje-to-server
            // socket.on('dato-turno-server', ( data ) => {
              
              
            //        console.log( data );
            //     this.io.emit('dato-turno-server', data );
            //  });

            //  socket.on('solicitar-ticket', ( data ) => {
            //     console.log( data );
            //    this.io.emit('solicitar-ticket', data );
            // });
         

            // socket.on('abrir-proyecto', ( ciudad ) => {
            //     console.log('desde', ciudad);
            //     socket.join(ciudad)

            

                

              
            // })
            
        
        });
    }

 
}


module.exports = Sockets;