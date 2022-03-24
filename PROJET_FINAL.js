function Entrer1(){
        let val1=0;
        let val2=0;
        let val3=0;
        let val4=0;
        let val5=0;
        let val6=0;
        let val7=0;
        let val8=0;
        let val9=0;
        let val10=0;
        let t=document.getElementById("q1").value;
        if(t=="CIBERACOSO" | t=="Ciberacoso" | t=="ciberacoso"){
                val1=val1+1;
                document.getElementById("r1").innerHTML="¡¡FELICIDADES ESTA ES LA RESPUESTA CORRECTA !!";
                document.querySelector("#r1").classList.remove("C");
                document.querySelector("#r1").classList.add("B");
                }
        else{
            document.getElementById("r1").innerHTML="DEMASIADO LA RESPUESTA CORRECTA ES: CIBERACOSO ";
            document.querySelector("#r1").classList.remove("C");
            document.querySelector("#r1").classList.add("X");
                }
        let c=document.getElementById("q2").value;
        if(c=="50%" | c==50){
                val2=val2+1;
                document.getElementById("r2").innerHTML="¡¡FELICIDADES ESTA ES LA RESPUESTA CORRECTA !!";
                document.querySelector("#r2").classList.remove("C");
                document.querySelector("#r2").classList.add("B");
                }
        else{
            document.getElementById("r2").innerHTML="DEMASIADO LA RESPUESTA CORRECTA ES: 50% (LA MITAD)";
            document.querySelector("#r2").classList.remove("C");
            document.querySelector("#r2").classList.add("X");
                }
        let d=document.getElementById("q3").value;
        if(d=="SI" | d=="Si" | d=="si"){
                val3=val3+1;
                document.getElementById("r3").innerHTML="¡¡FELICIDADES ESTA ES LA RESPUESTA CORRECTA !!";
                document.querySelector("#r3").classList.remove("C");
                document.querySelector("#r3").classList.add("B");
                }
        else {
            document.getElementById("r3").innerHTML="DEMASIADO LA RESPUESTA CORRECTA ES: SI";
            document.querySelector("#r3").classList.remove("C");
            document.querySelector("#r3").classList.add("X");
                }
        let e=document.getElementById("q4").value;
        if(e=="NO" | e=="no" | e=="No"){
                val4=val4+ 1;
                document.getElementById("r4").innerHTML="¡¡FELICIDADES ESTA ES LA RESPUESTA CORRECTA !!";
                document.querySelector("#r4").classList.remove("C");
                document.querySelector("#r4").classList.add("B");
                }
        else{
            document.getElementById("r4").innerHTML="DEMASIADO LA RESPUESTA CORRECTA ES: NO";
            document.querySelector("#r4").classList.remove("C");
            document.querySelector("#r4").classList.add("X");
                }
        let f=document.getElementById("q5").value;
        if(f=="NO" | f=="no" | f=="No"){
                val5=val5+1;
                document.getElementById("r5").innerHTML="¡¡FELICIDADES ESTA ES LA RESPUESTA CORRECTA !!";
                document.querySelector("#r5").classList.remove("C");
                document.querySelector("#r5").classList.add("B");
                }
        else{
            document.getElementById("r5").innerHTML="DEMASIADO LA RESPUESTA CORRECTA ES: NO";
            document.querySelector("#r5").classList.remove("C");
            document.querySelector("#r5").classList.add("X");
                }
        
        calcul= val1+ val2+ val3+ val4+ val5+ val6+ val7+ val8+ val9+ val10;
        document.getElementById("rfin").innerHTML="TU PUNTAJE ES "+ calcul+"/5";
        let pourc=parseFloat((parseFloat(calcul)/5)*100);
        document.getElementById("rfin1").innerHTML="TU PORCENTAJE DE ÉXITO ES "+ pourc+"%";

         if (calcul==0){
                document.getElementById("rfin2").innerHTML="¡ES CATASTRÓFICO!";
                document.querySelector("#rfin2").classList.remove("C");
                document.querySelector("#rfin2").classList.add("X");
                }
        else if(calcul<=5 & calcul>0){
                document.getElementById("rfin2").innerHTML="VUELVA A LEER EL SITIO";
                document.querySelector("#rfin2").classList.remove("C");
                document.querySelector("#rfin2").classList.add("Y");
                }
         else if(calcul<=7 & calcul>5){
                document.getElementById("rfin2").innerHTML="¡ESTÁ BIEN! ";
                document.querySelector("#rfin2").classList.remove("C");
                document.querySelector("#rfin2").classList.add("Z");
                }
         else if(calcul<=10 & calcul>7){
                document.getElementById("rfin2").innerHTML="¡ESTÁ MUY BIEN!";
                document.querySelector("#rfin2").classList.remove("C");
                document.querySelector("#rfin2").classList.add("B");
                }



}
let b=document.getElementById("b1");
b.addEventListener("click", Entrer1);



