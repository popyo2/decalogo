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
        if(d=="F8"){
                val3=val3+1;
                document.getElementById("r3").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r3").classList.remove("C");
                document.querySelector("#r3").classList.add("B");
                }
        else {
            document.getElementById("r3").innerHTML="Dommage, la bonne réponse est: F8";
            document.querySelector("#r3").classList.remove("C");
            document.querySelector("#r3").classList.add("X");
                }
        let e=document.getElementById("q4").value;
        if(e=="O(n²)"){
                val4=val4+ 1;
                document.getElementById("r4").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r4").classList.remove("C");
                document.querySelector("#r4").classList.add("B");
                }
        else{
            document.getElementById("r4").innerHTML="Dommage, la bonne réponse est: O(n²)";
            document.querySelector("#r4").classList.remove("C");
            document.querySelector("#r4").classList.add("X");
                }
        let f=document.getElementById("q5").value;
        if(f=="O(n)"){
                val5=val5+1;
                document.getElementById("r5").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r5").classList.remove("C");
                document.querySelector("#r5").classList.add("B");
                }
        else{
            document.getElementById("r5").innerHTML="Dommage, la bonne réponse est: O(n)";
            document.querySelector("#r5").classList.remove("C");
            document.querySelector("#r5").classList.add("X");
                }
        let g=document.getElementById("q6").value;
        if(g=="HyperText Transfert Protocol" | g=="HyperTextTransfertProtocol"){
                val6=val6+1;
                document.getElementById("r6").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r6").classList.remove("C");
                document.querySelector("#r6").classList.add("B");
                }
        else{
            document.getElementById("r6").innerHTML="Dommage, la bonne réponse est: HyperText Transfert Protocol";
            document.querySelector("#r6").classList.remove("C");
            document.querySelector("#r6").classList.add("X");
                }
        let h=document.getElementById("q7").value;
        if(h=="Get et Post" | h=="GET et POST"){
                val7=val7+1;
                document.getElementById("r7").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r7").classList.remove("C");
                document.querySelector("#r7").classList.add("B");
                }
        else{
            document.getElementById("r7").innerHTML="Dommage, la bonne réponse est: Get et Post";
            document.querySelector("#r7").classList.remove("C");
            document.querySelector("#r7").classList.add("X");
                }
        let i=document.getElementById("q8").value;
        if(i=="C++" | i=="c++"){
                val8=val8+1;
                document.getElementById("r8").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r8").classList.remove("C");
                document.querySelector("#r8").classList.add("B");
                }
        else{
            document.getElementById("r8").innerHTML="Dommage, la bonne réponse est: C++";
            document.querySelector("#r8").classList.remove("C");
            document.querySelector("#r8").classList.add("X");
                }
        let j=document.getElementById("q9").value;
        if(j=="italique" | j=="Italique"){
                val9=val9+1;
                document.getElementById("r9").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r9").classList.remove("C");
                document.querySelector("#r9").classList.add("B");
                }
        else{
            document.getElementById("r9").innerHTML="Dommage, la bonne réponse est: Italique";
            document.querySelector("#r9").classList.remove("C");
            document.querySelector("#r9").classList.add("X");
                }
        let k=document.getElementById("q10").value;
        if(k=="American standard code for information interchange"){
                val10=val10+1;
                document.getElementById("r10").innerHTML="Bravo c'est la bonne réponse !!";
                document.querySelector("#r10").classList.remove("C");
                document.querySelector("#r10").classList.add("B");
                }
        else{
            document.getElementById("r10").innerHTML="Dommage, la bonne réponse est: American standard code for information interchange";
            document.querySelector("#r10").classList.remove("C");
            document.querySelector("#r10").classList.add("X");
                }

        calcul= val1+ val2+ val3+ val4+ val5+ val6+ val7+ val8+ val9+ val10;
        document.getElementById("rfin").innerHTML="TU PUNTAJE ES "+ calcul+"/10";
        let pourc=parseFloat((parseFloat(calcul)/10)*100);
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



