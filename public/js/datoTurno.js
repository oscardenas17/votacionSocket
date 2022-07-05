
console.log('desde datoturno');
const socket = io('http://localhost:4000')

// //referencias del DOM
const formulario = document.querySelector('#miformulario')
const primernombre = document.querySelector('#primernombre')
const segundonombre = document.querySelector('#segundonombre')
const apellidos = document.querySelector('#apellidos')
const consultorio = document.querySelector('#consultorio')
const centro = document.querySelector('#centro')
// const socket = io(); 



formulario.addEventListener('submit', (e) => {
    e.preventDefault()

   const txtNombre = `${primernombre.value}  ${segundonombre.value}  ${apellidos.value}` ;
   const txtConsultorio = consultorio.value
   const txtCentro = centro.value

//    let nombre= {
//     txtNombre,
//     txtConsultorio
//    }
//    let ciudad = {txtCentro}
  
    

//    const Turnos = []
//   Turnos.push(datos)
//   console.log(Turnos)
   //Emitir 
    //socket.emit('dato-turno', [Turnos] )

     socket.emit('dato-turno-server', { 
        txtNombre,
        txtConsultorio,
        txtCentro
    }
        
 
    )

})
// btnCrear.addEventListener( 'click', () => {

//     const pnombre = primernombre.value;
//     const senombre = segundonombre.value;
//     const apellido = apellidos.value;
//     const consul  = consultorio.value;


//     const payload = {
//         pnombre,
//         senombre,
//         apellido,
//         consul,
               
//         // fecha: new Date().getTime()
//     }
    
//     socket.emit( 'enviar-mensaje', payload, (  ) => {
//         console.log('Desde el server para enviar datos',  );
//     });
// });


// // btnCrear.addEventListener( 'click', () => {
// //     console.log('Desde el boton ', );
// //     this.emit( 'siguiente-ticket', null, (   ) => {
// //         lblNuevoTicket.innerText = ticket;
// //         console.log('Desde el boton ', );
// //     });
   
// // });

// console.log('Nuevo Ticket HTML');