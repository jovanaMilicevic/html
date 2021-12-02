/*otvaranje menija i zatvaranje*/ 
const selectElement = function(element)
{
    return document.querySelector(element);
};

let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click',function ()
{
    body.classList.toggle('open');
});

/*animacije na skrol*/ 
window.sr = ScrollReveal();

sr.reveal('.animate-left',
{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right',
{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top',
{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-bottom',
{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
/*provera unosa forme*/
function imeprovera()
{
    var ime=document.mojaforma.ime.value;
    var prezime=document.mojaforma.prezime.value;
    var sifra=document.mojaforma.sifra.value;
    var potvrdasifra=document.mojaforma.potvrdasifra.value;
    var email=document.mojaforma.email.value;
    var broj=document.mojaforma.broj.value;

    var phone_pat=/^[0]?[6]?[0-6,9]?[/]?[0-9]{6,7}$/;
    var email_pat= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var dat=new Date()
    var vreme = dat.getDate() +"."+(dat.getMonth()+1)+"."+dat.getFullYear()+" "+dat.getHours()+":"+dat.getMinutes();
    
    save("Vreme slanja podataka",vreme,localStorage);
    save("Vreme slanja podataka",vreme,sessionStorage);
    save("Email",email,localStorage);
    save("Email",email,sessionStorage);

    if(ime===""  || ime===null)
    {
        document.getElementById("prva").innerHTML="Niste uneli ime" + "!";
        return false;
    }
    else if(prezime===""  || prezime===null)
    {
        document.getElementById("prva").innerHTML="";
        document.getElementById("druga").innerHTML="Niste uneli prezime" + "!";
        return false;
    }
    else if(sifra===""  || sifra===null)
    {
        document.getElementById("druga").innerHTML="";
        document.getElementById("treca").innerHTML="Niste uneli sifru" + "!";
        return false;
    }
    else if(potvrdasifra===""  || potvrdasifra===null)
    {
        document.getElementById("treca").innerHTML="";
        document.getElementById("cetvrta").innerHTML="Niste uneli potvrdu sifre" + "!";
        return false;
    }
    else if(!(sifra==potvrdasifra))
    {
        document.getElementById("cetvrta").innerHTML="Šifre se ne podudaraju" + "!";
        document.getElementById("cetvrta").style.color="#d6c41e";
        return false;
    }
    else if(email===""  || email===null)
    {
        document.getElementById("cetvrta").innerHTML="";
        document.getElementById("peta").innerHTML="Niste uneli E-mail adresu" + "!";
        return false;
    }
    else if(broj===""  || broj===null)
    {
        document.getElementById("peta").innerHTML="";
        document.getElementById("sesta").innerHTML="Niste uneli broj telefona" + "!";;
        return false;
    }

    else if(!email.match(email_pat))
    {
        document.getElementById("cetvrta").innerHTML="";
        document.getElementById("peta").innerHTML="Niste lepo uneli e-mail adresu" + "!";
        document.getElementById("peta").style.color="#d6c41e";
        return false;
    }
    else if(!broj.match(phone_pat))
    {
        document.getElementById("peta").innerHTML="";
        document.getElementById("sesta").innerHTML="Niste lepo uneli broj telefona" + "!";
        document.getElementById("sesta").style.color="#d6c41e";
        return false;
    }
  
    else
    {
        alert ("Uspešno ste poslali formu");

        /*var podaci = {
            email: email,
            datum: datum
        };*/

        return true;
    }
}

/*sesija i memorija*/


function save(key, value, storage)
    {
        storage.setItem(key, value);
    }
var keys = [];
var values = [];
function readStorage(storage, keys, values, idEl)
{
        keys.length = 0;
        values.length = 0;
    let i=0;
        while(storage.key(i)){
            let k = storage.key(i);
            let v = storage.getItem(k);
            keys.push(k);
            values.push(v);
            i++;
        }
    var rez="";
    for(i=0;i<keys.length;i++){
        rez+=" " + keys[i] + ": " + values[i];
    }
        document.getElementById(idEl).innerHTML=rez;
}

