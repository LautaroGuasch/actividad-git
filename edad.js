/*Crear una función que evalué si un usuario es mayor de edad, 
el resultado deberá mostrarse mediante una ventana (utilizar Alert)*/

function edad(nombre, anios){
    if (anios > 17){
        window.alert( nombre + ' es mayor de edad');
    }
    else{
        window.alert( nombre + 'es menor de edad');
    }
};

window.alert('1- Funcion que evalua si un usuario es mayor de edad');
const nombre = window.prompt('Ingrese su nombre');
const anios = window.prompt('Ingrese su edad');

edad(nombre, anios);


/*Modificar el programa anterior para que evalué el ingreso de 3 usuarios e indique cuál de ellos es el mayor*/

function mayor(nombre1, edad1, nombre2, edad2, nombre3, edad3){
    if (edad1 >= edad2 && edad1 > edad3){
        if (edad1 == edad2){
            window.alert(nombre1 + ' y ' + nombre2 + ' son los mayores');
        }
        else{
            window.alert(nombre1 + ' es el mayor de los 3');
        }
    }
    if (edad1 > edad2 && edad1 >= edad3){
        if (edad1 == edad3){
            window.alert(nombre1 + ' y ' + nombre3 + ' son los mayores');
        }
        else{
            window.alert(nombre1 + ' es el mayor de los 3');
        }
    }

    if (edad2 >= edad1 && edad2 > edad3){
        if (edad1 == edad2){
            window.alert(nombre1 + ' y ' + nombre2 + ' son los mayores');
        }
        else{
            window.alert(nombre2 + ' es el mayor de los 3');
        }
        
    }
    if (edad2 > edad1 && edad2 >= edad3){
        if (edad2 == edad3){
            window.alert(nombre2 + ' y ' + nombre3 + ' son los mayores');
        }
        else{
            window.alert(nombre2 + ' es el mayor de los 3');
        }
        
    }

    if (edad3 > edad1 && edad3 >= edad2){
        if (edad2 == edad3){
            window.alert(nombre2 + ' y ' + nombre3 + ' son los mayores');
        }
        else{
            window.alert(nombre3 + ' es el mayor de los 3');
        }
        
    }
    if (edad3 >= edad1 && edad3 > edad2){
        if (edad1 == edad3){
            window.alert(nombre1 + ' y ' + nombre3 + ' son los mayores');
        }
        else{
            window.alert(nombre3 + ' es el mayor de los 3');
        }
        
    }
    
    if(edad1 == edad2 && edad1 == edad3){
        window.alert('Los 3 tienen la misma edad');
    }
}

window.alert('2- Funcion que evalua que usuario es mas grande');

const nombre1 = window.prompt('Ingrese el primer nombre');
const edad1 = window.prompt('Ingrese la primer edad');

const nombre2 = window.prompt('Ingrese el segundo nombre');
const edad2 = window.prompt('Ingrese la segunda edad');

const nombre3 = window.prompt('Ingrese el tercer nombre');
const edad3 = window.prompt('Ingrese la tercer edad');

mayor(nombre1,edad1,nombre2,edad2,nombre3,edad3);