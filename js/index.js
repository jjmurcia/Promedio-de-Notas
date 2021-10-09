function promedio() {
    var nombre = document.getElementById("nombre").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var proceso = (nota1 + nota2 + nota3) / 3;

    console.log(proceso);
    var tabla = document.getElementById("tabla");

    if (nota1 > 5 || nota2 > 5 || nota3 > 5) {
        alert("Ud ingreso notas mayores a 5")
        tabla.deleteRows();
    }

    for (var j = 0; j < 1; j++) {
        var fila = tabla.insertRow(tabla.rows.label);
        var columna1 = fila.insertCell(0);
        var columna2 = fila.insertCell(1);
        var columna3 = fila.insertCell(2);
        var columna4 = fila.insertCell(3);
        columna1.innerHTML = nombre;
        columna2.innerHTML = proceso;
    }


    if (proceso >= 3 && proceso <= 5) {
        columna3.innerHTML = "aprobado";
        columna3.style.backgroundColor = '#009846';
    } else {
        columna3.innerHTML = "desaprobado";
        columna3.style.backgroundColor = '#FA5858';
    }
}

document.getElementById("saveDataBtn").addEventListener("click", function(e) {
    e.preventDefault()
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value
    var nombre = document.getElementById("nombre").value
    console.log(nota1, nombre)
    if (nota1 == "" || nota2 == "" || nota3 == "" || nombre == "") {
        alert("Debe llenar los campos!")
    } else {
        localStorage.setItem(nota1, [nombre, "3", "4", "5"])
        alert("Todo quedó guardado!")
    }

})