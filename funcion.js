function age() {  
    var d1 = document.getElementById('date').value;  
    var m1 = document.getElementById('month').value;  
    var y1 = document.getElementById('year').value;  
    var date = new Date();  
    var d2 = date.getDate();  
    var m2 = 1 + date.getMonth();  
    var y2 = date.getFullYear();  
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
    if(d1 > d2){  
     d2 = d2 + month[m2 - 1];  
     m2 = m2 - 1;  
    }  
    if(m1 > m2){  
     m2 = m2 + 12;  
     y2 = y2 - 1;  
    }  
    var d = d2 - d1;  
    var m = m2 - m1;  
    var y = y2 - y1;  
    document.getElementById('age').innerHTML = 'Tu edad es '+y+' años, '+m+' meses y '+d+' días.';  
} 
//no la uso acá, está en html
function fechaHoy(){
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    document.getElementById("fecha").innerHTML = dia+"/"+mes+"/"+anio;
}