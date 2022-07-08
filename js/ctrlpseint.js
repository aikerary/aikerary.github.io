const varpseint= document.getElementById('varpseint');
const condpseint= document.getElementById('condpseint');
const cicpseint= document.getElementById('cicpseint');
const arrpseint= document.getElementById('arrpseint');
const firstbtn=document.getElementById('firstbtn');
const secondbtn=document.getElementById('secondbtn');
const thirdbtn=document.getElementById('thirdbtn');
const fourthbtn=document.getElementById('fourthbtn');

//Add a event listener to each of the btns click
firstbtn.addEventListener('click',function(){
    varpseint.classList.remove('hidden');
    condpseint.classList.add('hidden');
    cicpseint.classList.add('hidden');
    arrpseint.classList.add('hidden');
}
);
secondbtn.addEventListener('click',function(){
    varpseint.classList.add('hidden');
    condpseint.classList.remove('hidden');
    cicpseint.classList.add('hidden');
    arrpseint.classList.add('hidden');
}
);
thirdbtn.addEventListener('click',function(){
    varpseint.classList.add('hidden');
    condpseint.classList.add('hidden');
    cicpseint.classList.remove('hidden');
    arrpseint.classList.add('hidden');
}
);
fourthbtn.addEventListener('click',function(){
    varpseint.classList.add('hidden');
    condpseint.classList.add('hidden');
    cicpseint.classList.add('hidden');
    arrpseint.classList.remove('hidden');
}
);


