const btnSwitch=document.querySelector('#switch');
btnSwitch.addEventListener('click',function(){
    if (document.body.classList.contains('specialeven')){
        document.body.classList.remove('specialeven');
        document.body.classList.add('specialodd');
    }else if (document.body.classList.contains('specialodd')){
        document.body.classList.remove('specialodd');
    }else{
        document.body.classList.add('specialeven');
    }
});