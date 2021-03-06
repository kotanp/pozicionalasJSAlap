document.getElementById("a").value="halihó";
document.getElementById("b").value="mindenki";
var valtozoA=document.getElementById("a").value;
var valtozoB=document.getElementById("b").value;
document.write("Első változó: "+valtozoA+"<br>");
document.write("Második változó: "+ valtozoB);
var valtozo1=document.getElementById("a").value=3;
var valtozo2=document.getElementById("b").value=5;
var osszeg=Number(valtozo1)+Number(valtozo2);
document.write("<br>összeg: "+ osszeg);


kiir();                  

function kiir(){
    var szoveg="";
for (var i=1; i<111; i++){
    szoveg+=i+", ";
    if (i%10===0){
        szoveg+="<br>";
    }
}
document.write("<br>"+szoveg);
}
