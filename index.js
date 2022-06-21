var opc=0;
const estudiantes=[];

menu()
function menu(){
    do{
        opc=+(prompt("Sistema de Registro de Estudiantes" +"\n"+
                "Ingrese la operación que quiera realizar" +"\n"+
                "1-Crear un nuevo estudiante"+"\n"+
                "2-Eliminar un estudiante"+"\n"+
                "3-Buscar un estudiante"+"\n"+
                "4-Filtrar lista de estudiantes por programa"+"\n"+
                "5-Ver lista de estudiantes completa"+"\n"+
                "6-Salir"));

        switch (opc){
            case 5:
                completo();
                break;
            case 4:
                filtrar();
                break;
            case 3: 
                buscar();
                break;
            case 2:
                eliminar();
                break;
            case 1:
                ingreso();
                break;
        }   
    } 
    while(opc=!6);
} 

function ingreso(){
    let nomb=prompt("Ingrese el nombre completo del estudiante");
    let id=+(prompt("Ingrese el número de identificación del estudiante"));
    let fin=prompt("Ingrese la fecha de inscripción del estudiante");
    let cel=prompt("Ingrese el número de celular del estudiante");
    let prog=prompt("Ingrese el programa")
    let est="activo";

    class estudiante{
        constructor(nombre, identificacion, fechain, celular, estado, programa){
            this.nombre = nombre;
            this.identificacion = identificacion;
            this.fechain = fechain;
            this.celular = celular;
            this.programa = programa;
            this.estado = estado;
        }
    }
    estudiantes.push(new estudiante(nomb,id,fin,cel,est, prog));
    alert("Estudiante registrado con éxito.");

    let dec1=prompt("Desea ingresar un nuevo estudiante (yes/no)")
    if(dec1=="yes"){
        ingreso();
    } 
    menu();
}

function eliminar(){
    let desBusEl=+(prompt("Ingrese el número de identificación del estudiante que desea eliminar"));
    const buscadoEl = estudiantes.find(estudianteBusEl=>estudianteBusEl.identificacion===desBusEl);
    const el1 = estudiantes.indexOf(buscadoEl);
    const eliminado = estudiantes.splice(el1,1);
    alert("Estudiante eliminado con exito")
    let decEl=prompt("Desea eliminar otro estudiante (yes/no)")
        if(decEl=="yes"){
            eliminar();
        } 
    menu();
}

function buscar(){
    let desBus=+(prompt("Ingrese el número de identificación del estudiante que desea buscar"));
    const buscado = estudiantes.find(estudianteBus=>estudianteBus.identificacion===desBus);
    alert("Los datos del estudiante buscado son:" +"\n"+ 
        "Nombre: "+buscado.nombre +"\n"+  
        "Numero de identificacion: " + buscado.identificacion +"\n"+ 
        "Fecha de inicio: "+ buscado.fechain +"\n"+ 
        "Celular: " + buscado.celular +"\n"+ 
        "Estado: " + buscado.estado +"\n"+ 
        "Programa: " + buscado.programa);
    menu();
}

function filtrar(){
    let desFil=prompt("Ingrese el programa que desea filtrar");
    let filtrado = estudiantes.filter(estudianteFil=>estudianteFil.programa===desFil);
    for(let i=0;i<filtrado.length;i++){
        alert("Nombre: "+filtrado[i].nombre +"\n"+  
            "Numero de identificacion: " + filtrado[i].identificacion +"\n"+ 
            "Fecha de inicio: "+ filtrado[i].fechain +"\n"+ 
            "Celular: " + filtrado[i].celular +"\n"+ 
            "Estado: " + filtrado[i].estado);
    }
    menu();
}

function completo(){
    for(let i=0;i<estudiantes.length;i++){
        alert("Nombre: "+estudiantes[i].nombre +"\n"+  
            "Numero de identificacion: " + estudiantes[i].identificacion +"\n"+ 
            "Fecha de inicio: "+ estudiantes[i].fechain +"\n"+ 
            "Celular: " + estudiantes[i].celular +"\n"+ 
            "Estado: " + estudiantes[i].estado +"\n"+ 
            "Programa: " + estudiantes[i].programa);
    }
    alert("Fin de la lista")
    menu();
}








    

