txt="";
signe="";
n1=null;
n2=null;
etat_1 = 0;
etat_2 = 0;

function afficher_ecran(that){
    elt=document.getElementById(that).innerText;
    if(etat_1==0)  {
        if (elt!="+" || elt!="-" ||elt!="/"||elt!="*")
     {
        txt=txt + elt;
        document.getElementById("ecran").innerText=txt;
     }   
    }

    if (etat_2 == 0 && (elt=="+" || elt=="-" ||elt=="/"||elt=="*"))
    {
        n1=Number(txt)
        signe=elt;
        txt="";
        etat_1 = 1;
        etat_2 = 1; 
    } else if (etat_1 == 1 && etat_2==1 && (elt=="+" || elt=="-" ||elt=="/"||elt=="*")){
        n2=Number(txt);
        txt=calcul(n1,n2);
        signe="";
        etat_2==0;
        document.getElementById("ecran").innerText=txt;
    }

    if (etat_1 ==1 && etat_2 == 1 ){
        txt=txt + elt;
        document.getElementById("ecran").innerText=txt;
    }
}

function erase(){
    txt="";
    signe="";
    document.getElementById("ecran").innerText=txt;
    etat_1 = 0;
    etat_2 = 0;
}

function calcul(n1,n2){
    if (signe=="+")
    {
       plus(n1,n2);
    }
}



function plus(n1, n2){
    return(n1 + n2);
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

