let cajas=document.querySelectorAll("form input");
var cajaChequeo=null;

function elementoSeleccionado(caja){
    cajaChequeo=caja.id;
}

function eevaluaPatron(){
    if (cajaChequeo=="cId"){
        var patron=/^[0-9]+$/;
        var resultado=patron.test(cId.value);
        if (!resultado){
            document.getElementById("cId").style.color="red";
            document.getElementById("cId").focus();
        }else {
            document.getElementById("cId").style.color="black";
        }
    }
    if (cajaChequeo=="cNombre"){
        var patron=/(?=^.{1,50}$)[a-zA-Záéíóú]+/;
        var resultado=patron.test(cNombre.value);
        if (!resultado){
            document.getElementById("cNombre").style.color="red";
            document.getElementById("cNombre").focus();
        }else {
            document.getElementById("cNombre").style.color="black";
        }
    }
    if (cajaChequeo=="cDescripcion"){
        var patron=/(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
        var resultado=patron.test(cDescripcion.value);
        if (!resultado){
            document.getElementById("cDescripcion").style.color="red";
            document.getElementById("cDescripcion").focus();
        }else {
            document.getElementById("cDescripcion").style.color="black";
        }
    }
    if (cajaChequeo=="cTipo"){
        var patron=/^Alcantarilla$|^Sucia$|^Limpia$|^Farola$|^Papelera$|^Jardin$|^Datos$|^Eléctrica$/;
        var resultado=patron.test(cTipo.value);
        if (!resultado){
            document.getElementById("cTipo").style.color="red";
            document.getElementById("cTipo").focus();
        }else {
            document.getElementById("cTipo").style.color="black";
        }
    }
    if (cajaChequeo=="cLatitud"){
        var patron=/^[0-9.]*$/;
        var resultado=patron.test(cLatitud.value);
        if (!resultado){
            document.getElementById("cLatitud").style.color="red";
            document.getElementById("cLatitud").focus();
        }else {
            document.getElementById("cLatitud").style.color="black";
        }
    }
    if (cajaChequeo=="cLongitud"){
        var patron=/^-[0-9.]*$/;
        var resultado=patron.test(cLongitud.value);
        if (!resultado){
            document.getElementById("cLongitud").style.color="red";
            document.getElementById("cLongitud").focus();
        }else {
            document.getElementById("cLongitud").style.color="black";
        }
    }
    if (cajaChequeo=="cFecahac"){
        var patron=/^([0-2][0-9]|3[0-1])(-)(0[1-9]|1[0-2])\2(\d{4})$/;
        var resultado=patron.test(cFecahac.value);
        if (!resultado){
            document.getElementById("cFecahac").style.color="red";
            document.getElementById("cFecahac").focus();
        }else {
            document.getElementById("cFecahac").style.color="black";
        }
    }
    if (cajaChequeo=="cFecaham"){
        var patron=/^([0-2][0-9]|3[0-1])(-)(0[1-9]|1[0-2])\2(\d{4})$/;
        var resultado=patron.test(cFecaham.value);
        if (!resultado){
            document.getElementById("cFecaham").style.color="red";
            document.getElementById("cFecaham").focus();
        }else {
            document.getElementById("cFecaham").style.color="black";
        }
    }
}

cajas.forEach(caja=>{
    caja.addEventListener('keydown', () => {
        elementoSeleccionado(caja);
    });

});

cajas.forEach(caja =>{
    caja.addEventListener('keyup', () =>{
        eevaluaPatron(caja);
    });
});

cajas.forEach(caja =>{
    caja.addEventListener('blur', () =>{
        eevaluaPatron(caja);
    });
});