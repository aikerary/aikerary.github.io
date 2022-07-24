window.addEventListener('load', function () {
    const nombre = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const mensaje = document.getElementById('message');
    const form = document.getElementById('datos');
    const parrafo=document.getElementById('warnings');
    const reset = document.getElementById('resetBtn');
    
    reset.addEventListener('click', function() {
        form.reset();
    });
    
    
    function recorrageData(data){
        if(data.length>0){
            let texting = "";
            parrafo.innerHTML='';
            for(let i=0;i<data.length;i++){
                texting+=`${data[i]}`;
            }
            parrafo.innerHTML+=texting;
        }
    };
    
    
    function recorrageData2(data){
        if(data.length>0){
            let texting = "";
            for(let i=0;i<data.length;i++){
                texting+=`${data[i]}`;
            }
            console.log(texting);
        }
    }
    
    function obtainDataWithoutBr(){
        let data=[
            "Nombre: "+nombre.value,
            // nombre.value,
            " Email: "+email.value,
            // email.value,
            " Asunto: "+subject.value,
            // subject.value,
            " Mensaje: "+mensaje.value,
            // mensaje.value,
        ];
        return data;
    }
    
    function obtainData(){
        let data=[
            "Nombre: ",
            nombre.value+"<br>",
            "<br>",
            "Email: ",
            email.value+"<br>",
            "<br>",
            "Asunto: ",
            subject.value+"<br>",
            "<br>",
            "Mensaje: ",
            mensaje.value+"<br>",
        ];
        return data;
    }
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let warnings=""
        let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let enviar=false;
        parrafo.innerHTML="";
        if(nombre.value.length==0){
            warnings+="El nombre es obligatorio<br>"
            enviar=true;
        }else if(nombre.value.length < 3){
            warnings += "El nombre debe tener al menos 3 caracteres<br>";
            enviar=true;
        }
        if(email.value.length==0){
            warnings+="El email es obligatorio<br>"
            enviar=true;
        }else if(regexEmail.test(email.value)==false){
            warnings+="El email no es válido<br>"
            enviar=true;
        }
        if(subject.value.length==0){
            warnings+="El asunto es obligatorio<br>"
            enviar=true;
        }
        if(mensaje.value.length==0){
            warnings+="El mensaje es obligatorio<br>"
            enviar=true;
        }
        if(enviar){
            parrafo.innerHTML=warnings;
        }else{
            form.submit();
            recorrageData(obtainData());
            recorrageData2(obtainDataWithoutBr());
            form.reset();
        }
    });
});
