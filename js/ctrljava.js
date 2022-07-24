window.addEventListener('load', function () {
    const varjava= document.getElementById('varjava');
    const condjava= document.getElementById('condjava');
    const cicjava= document.getElementById('cicjava');
    const arrjava= document.getElementById('arrjava');
    const firstbtn2=document.getElementById('firstbtn2');
    const secondbtn2=document.getElementById('secondbtn2');
    const thirdbtn2=document.getElementById('thirdbtn2');
    const fourthbtn2=document.getElementById('fourthbtn2');
    
    //Add a event listener to each of the btns click
    firstbtn2.addEventListener('click',function(){
        varjava.classList.remove('hidden');
        condjava.classList.add('hidden');
        cicjava.classList.add('hidden');
        arrjava.classList.add('hidden');
    }
    );
    secondbtn2.addEventListener('click',function(){
        varjava.classList.add('hidden');
        condjava.classList.remove('hidden');
        cicjava.classList.add('hidden');
        arrjava.classList.add('hidden');
    }
    );
    thirdbtn2.addEventListener('click',function(){
        varjava.classList.add('hidden');
        condjava.classList.add('hidden');
        cicjava.classList.remove('hidden');
        arrjava.classList.add('hidden');
    }
    );
    fourthbtn2.addEventListener('click',function(){
        varjava.classList.add('hidden');
        condjava.classList.add('hidden');
        cicjava.classList.add('hidden');
        arrjava.classList.remove('hidden');
    }
    );
});