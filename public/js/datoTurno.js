//Reference HTML
const primernombre  = document.querySelector('#primernombre');
const segundonombre  = document.querySelector('#segundonombre');
const apellidos  = document.querySelector('#apellidos');
const consultorio  = document.querySelector('#consultorio');
const btnCrear = document.querySelector('#btnEnviar');

const socket = io(); 


btnCrear.addEventListener( 'click', () => {

    const pnombre = primernombre.value;
    const senombre = segundonombre.value;
    const apellido = apellidos.value;
    const consul  = consultorio.value;


    const payload = {
        pnombre,
        senombre,
        apellido,
        consul,
               
        // fecha: new Date().getTime()
    }
    
    socket.emit( 'enviar-mensaje', payload, (  ) => {
        console.log('Desde el server para enviar datos',  );
    });
});

// this.on('connect', () => {
//      console.log('Conectado');

 
//     // lblOffline.style.display = 'none';
//     // lblOnline.style.display  = '';

// });


// this.on('disconnect', () => {
//     console.log('Desconectado del servidor');
 
//     // lblOnline.style.display  = 'none';
//     // lblOffline.style.display = '';
// });



// btnCrear.addEventListener( 'click', () => {
//     console.log('Desde el boton ', );
//     this.emit( 'siguiente-ticket', null, (   ) => {
//         lblNuevoTicket.innerText = ticket;
//         console.log('Desde el boton ', );
//     });
   
// });

console.log('Nuevo Ticket HTML');