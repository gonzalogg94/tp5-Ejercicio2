
let formulario=document.querySelector("#formulario");
formulario.addEventListener("submit",imprimirPersona)

function imprimirPersona(e){
    e.preventDefault();
    let añoNacimiento=document.querySelector("#inputAñoNacimiento").value;
    document.write(`<ul>
    <li>Nombre:${document.querySelector("#inputNombre").value}</li>
    <li>Edad:${document.querySelector("#inputEdad").value}</li>
    <li>Dni:${document.querySelector("#inputDni").value}</li>
    <li>Sexo:${document.querySelector("#inputSexo").value}</li>
    <li>Peso:${document.querySelector("#inputPeso").value}kg</li>
    <li>Altura:${document.querySelector("#inputAltura").value}cm</li>
    <li>Año de Nacimiento:${document.querySelector("#inputAñoNacimiento").value}</li>
    </ul>`);
    if (añoNacimiento>=1930 & añoNacimiento<=1948){
        document.write(`<h3>Esta persona pertenece a la generacion Silent Generation</h3><ul>
        <li>Poblacion de:6.300.000</li>
        <li>Cirscunstancia historia: Conflictos belicos</li>
        <li>Rasgo Caracteristico:austeridad</li>
        </ul>`);
    }else if(añoNacimiento>=1949&añoNacimiento<=1968){
        document.write(`<h3>Esta persona pertenece a la generacion Baby Boom</h3><ul>
        <li>Poblacion de:12.2000.000</li>
        <li>Cirscunstancia historia: Paz y explosion demografica</li>
        <li>Rasgo Caracteristico:ambicion</li>
        </ul>`);
    }else if(añoNacimiento>=1969&añoNacimiento<=1980){
        document.write(`<h3>Esta persona pertenece a la generacion Generacion x</h3><ul>
        <li>Poblacion de:9.300.000</li>
        <li>Cirscunstancia historia: Crisis del 73 y transicion española</li>
        <li>Rasgo Caracteristico:obsecion por el exito</li>
        </ul>`);
    }else if(añoNacimiento>=1981&añoNacimiento<=1993){
        document.write(`<h3>Esta persona pertenece a la generacion Y millennials</h3><ul>
        <li>Poblacion de:7.200.000</li>
        <li>Cirscunstancia historia: Inicio de la digitalizacion</li>
        <li>Rasgo Caracteristico:Frustracion</li>
        </ul>`);
    }else if(añoNacimiento>=1994&añoNacimiento<=2010){
        document.write(`<h3>Esta persona pertenece a la generacion Generacion z</h3><ul>
        <li>Poblacion de:7.800.000</li>
        <li>Cirscunstancia historia: explosion masiva de internet</li>
        <li>Rasgo Caracteristico:Irreverencia</li>
        </ul>`);
    }else{
        document.write("la edad ingresada no se encuentra dentro de los parametros establecidos")
    }
}

    



