//opret click på button
//få alderen (altid tal pga. "input type=number" i HTML)

document.getElementById("ok").addEventListener("click",function(){
    let nummer = document.getElementById("alder");
    let tal = nummer.value;
   
    var backtoyou;

    if (tal<19) {
       backtoyou ="du er lille" 
    }
    else if(tal<=19 && tal<66) {
        backtoyou ="du er ok" 
    } 
    else {
        backtoyou ="du er for stor" 
        
    }
    document.getElementById("kontrol").innerHTML = backtoyou;
});


