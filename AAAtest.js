let estudiantes = [
  {nombre: 'John', promedio: 8.5, aprobado: true},
  {nombre: 'Jane', promedio: 7, aprobado: true},
  {nombre: 'June', promedio: 3, aprobado: false},
]

let desaprobados = estudiantes.filter(function(number){
  return number.promedio<6;
});


let aprobados = estudiantes.filter(function(number){
  return number.promedio>=6;
});

let filler="\n"
console.log(aprobados, filler, desaprobados)
