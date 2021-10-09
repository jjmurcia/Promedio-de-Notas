document.getElementById("consultarBtn").addEventListener("click", function() {
    var inputId = document.getElementById("idToConsult").value
    var dataConsultada = localStorage.getItem(inputId)
    var array = dataConsultada.split(',')
    console.log(array, dataConsultada)
    if (dataConsultada == null) {
        alert("Ese dato no existe en el localStorage")
    } else {
        var pElement = document.getElementById("data")
        pElement.innerHTML = array[0] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 1: " + array[1] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 2: " + array[2] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 3: " + array[3] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota Final: " + "Sacaste tanto, perdiste o ganaste" + "<br>"
        pElement.innerHTML = pElement.innerHTML + "<br>"
    }
})