/*let a = document.getElementById("nombreCompleto").addEventListener("input", function() {




})*/


let VerificarNombre = ()=>{
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let Caracteres3 = document.getElementById("Caracteres3"); 
    let caracteres3Bool = 0;

    if(nombreCompleto.length >= 3){
        caracteres3Bool = 1;
        Caracteres3.innerHTML = "";
    }
    else {
        Caracteres3.style.color = "red";
        Caracteres3.innerHTML = "obligatorio, mínimo 3 caracteres";
    }

    return(caracteres3Bool)
}

let VerificarEmail = () => {
    let email = document.getElementById("email").value;
    let formatoValido = document.getElementById("formatoValido");
    let formatoValidoBool = 0;

    if(email.includes("@")){
        formatoValidoBool = 1;
        formatoValido.innerHTML = "";
    }
    else{
        formatoValido.style.color = "red";
        formatoValido.innerHTML = "debe tener formato válido";
    } 
    

    return(formatoValidoBool)
}

let VerificarContraseña = () => {
    let contraseña = document.getElementById("contraseña").value;
    let mas8 = document.getElementById("mas8");
    let numero = document.getElementById("numero");
    let letra = document.getElementById("letra");

    let mas8Bool = 0;
    let numeroBool = 0;
    let letraBool = 0;

    const condicionNum = /[0-9]/;
    const condicionLetra = /[a-z]/i;

    if(contraseña.length <= 8) {
        mas8.style.color = "red"
        mas8.innerHTML="Debe contener al menos 8 caracteres";
    }
    else {
        mas8Bool = 1;
        mas8.innerHTML="";
    }

    if(condicionNum.test(contraseña)){
        numero.innerHTML="";
        numeroBool = 1;
    }
    else{
        numero.style.color = "red";
        numero.innerHTML = "Debe contener al menos 1 numero";
    }
    

   if(condicionLetra.test(contraseña)){
        letra.innerHTML= "";
        letraBool = 1;
    }
    else {
        letra.style.color = "red";
        letra.innerHTML="Debe contener al menos 1 letra";
    } 
    

    let verifContra = mas8Bool + numeroBool + letraBool;
    return(verifContra)
}

let ConfirmarContraseña = () =>{ 
    let confirmarContraseña = document.getElementById("confirmarContraseña").value;
    let coincidir = document.getElementById("coincidir");
    let contraseña = document.getElementById("contraseña").value;
    let coincidirBool = 1;

    if(contraseña != confirmarContraseña) {
        coincidir.style.color = "red";
        coincidirBool = 0;
        coincidir.innerHTML="debe coincidir con la anterior";
    }
    else{
        coincidir.innerHTML="";
        coincidirBool=1;
    }
    return(coincidirBool)
} 

let VerificarForm =()=>{
    if (VerificarNombre() + VerificarEmail() + VerificarContraseña() + ConfirmarContraseña() == 6) {
        alert("registro exitoso");
        return true;
       
    }
    else{
        alert("No se puede enviar el formulario, verifique los campos");
        return false;
    }
}


