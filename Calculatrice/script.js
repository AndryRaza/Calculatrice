txt="";
signe="";
calcul_t=[];



function afficher_ecran(that){
    elt=document.getElementById(that).innerText;
    txt=txt+elt;
    document.getElementById("ecran").innerText=txt;
}

function erase(){
    txt="";
    signe="";
    calcul_t=[];
    document.getElementById("ecran").innerText=txt;
 
}


function operation(that){
    calcul_t.push(Number(txt));
    txt="";
    
    console.log(signe);
    if (document.getElementById(that).innerText == "="){
        document.getElementById("ecran").innerText=String(calcul_t[0]);
    }
    if (calcul_t.length  == 2){
        
        if (signe == "+"){
            calcul_t[0]=plus(calcul_t[0],calcul_t[1]);
            calcul_t.splice(1,1);
            document.getElementById("ecran").innerHTML=String(calcul_t[0]);
        }
        if (signe == "-"){
            calcul_t[0]=moins(calcul_t[0],calcul_t[1]);
            calcul_t.splice(1,1);
            document.getElementById("ecran").innerHTML=String(calcul_t[0]);
        }
        if (signe == "/"){
            calcul_t[0]=diviser(calcul_t[0],calcul_t[1]);
            calcul_t.splice(1,1);
            document.getElementById("ecran").innerHTML=String(calcul_t[0]);
        }
        if (signe == "*"){
            calcul_t[0]=multiplier(calcul_t[0],calcul_t[1]);
            calcul_t.splice(1,1);
            document.getElementById("ecran").innerHTML=String(calcul_t[0]);
        }
        signe=document.getElementById(that).innerText;
    }
    signe=document.getElementById(that).innerText;
}
 

function plus(n1, n2){
    return(n1+n2);
}

function moins(n1,n2){
    return(n1-n2);
}

function multiplier(n1,n2){
    return(n1*n2);
}

function diviser(n1,n2){
    return(n1/n2);
}

function allumage(){
   
    document.getElementById("bouton_allume").innerText=
    "@keyframes allumer{"+ 
    "0% {background-color: white;}" +
    "50% {background-color: yellow;}" +
    "100% {background-color: white;}}";

}
