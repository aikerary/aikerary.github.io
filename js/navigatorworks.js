window.addEventListener('load', function () {
    const list=document.querySelectorAll(".list");
    function activate(){
        list.forEach((item)=>
        {item.classList.remove("active");
        this.classList.add("active");}
        );
    }
    
    list.forEach((item)=>
    {item.addEventListener("click",activate);});
});
