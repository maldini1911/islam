function ok() {
    
    "use strict";
var now = new Date(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds();
if ( h < 10, m < 10) {
    
    h = "0" + h;
    m = "0" + m;
   
}

document.getElementById("dt").innerHTML =   h + ":" + m + ":" + s;
}
setInterval(ok, 500);
function quran() {
    
    "use strict";
     var q1 = document.getElementById("q1");
    q1.href = "pag1.html";
     var q2 = document.getElementById("q2");
    q2.href = "pag1.html";
     var q3 = document.getElementById("q3");
    q3.href = "pag1.html";
     var q4 = document.getElementById("q4");
    q4.href = "pag1.html";
     var q5 = document.getElementById("q5");
    q5.href = "pag1.html";
     var q6 = document.getElementById("q6");
    q6.href = "pag1.html";
    
}
quran();

function a7deth() {
    
    "use strict";
    var h1 = document.getElementById("h1");
    h1.href = "a7deth/h1.html";
     var h2 = document.getElementById("h2");
    h2.href = "a7deth/h2.html";
     var h3 = document.getElementById("h3");
    h3.href = "a7deth/h3.html";
     var h4 = document.getElementById("h4");
    h4.href = "a7deth/h4.html";
     var h5 = document.getElementById("h5");
    h5.href = "a7deth/h5.html";
     var h6 = document.getElementById("h6");
    h6.href = "a7deth/h6.html";
    
}
a7deth();


