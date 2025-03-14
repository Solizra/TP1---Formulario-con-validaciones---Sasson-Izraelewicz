
let VerificarNombre = ()=>{
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let Caracteres3 = document.getElementById("Caracteres3"); 
    let caracteres3Bool = 0;

    if(nombreCompleto.length >= 3){
        Caracteres3.style.color = "green";
        caracteres3Bool++;
    }
    else Caracteres3.style.color = "red";
    

    return(caracteres3Bool == 1)
}

let VerificarEmail = () => {
    let email = document.getElementById("email").value;
    let formatoValido = document.getElementById("formatoValido");
    let formatoValidoBool = 0;

    if(email.includes("@")){
        formatoValido.style.color = "green"
        formatoValidoBool = 1;
    }
    else formatoValido.style.color = "red";

}

let VerificarContraseña = () => {
    //hacer 
}




////////////////

function VerificarContraseña2(){
    let password = document.getElementById("contraseña").value;
    let Mas8 = document.getElementById("Mas8");
    let Mayusculas = document.getElementById("Mayusculas");
    let Especiales = document.getElementById("Especiales");
    let caracteresEspeciales = /[^a-zA-Z0-9]/;
    let Mas8Bool = 0;
    let MayusculasBool = 0;
    let especialesBool = 0;

    if(password.length < 8) Mas8.style.color = "red"
    else{
        Mas8.style.color = "green";
        Mas8Bool = 1;
    }
     
    if(password === password.toLowerCase()) Mayusculas.style.color = "red"
    else{
        Mayusculas.style.color = "green"
        MayusculasBool = 1;
    }
    
    if(caracteresEspeciales.test(password)){
        Especiales.style.color = "green"
        especialesBool = 1;
    }
    else Especiales.style.color = "red"
    console.log(Mas8Bool + MayusculasBool + especialesBool)

    return(Mas8Bool + MayusculasBool + especialesBool == 3)

}

function VerificarForm(){
    console.log(VerificarContraseña());
    if (VerificarContraseña())
        return true;
    else{
        let contraseñaNoValida = document.getElementById("contraseñaNoValida")
        contraseñaNoValida.innerHTML = "Es necesario completar los 3 campos para guardar la contraseña";
        return false;
    }
}