
var colors = require('colors');
const {arrayColores, arrayColores2}=require('./colores')


const mostrarColoresUno=()=>{

    arrayColores.forEach((color)=>{
        console.log(colors.red(color))
    })
    
}


const mostrarColoresDos=()=>{

    arrayColores2.forEach((color)=>{
        console.log(color)
    })

}

module.exports={
    mostrarColoresDos,
    mostrarColoresUno
}