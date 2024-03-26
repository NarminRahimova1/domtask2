let tabs=document.querySelectorAll(".tabs ul li");
let tabs_wraps=document.querySelectorAll(".tab-wrap");

tabs.forEach(function(tab,tab_index){
    tab.addEventListener("click",function(){
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        tabs_wraps.forEach(function(content,content_index){
            if(content_index===tab_index){
                content.style.display="block"
            }
            else{
                content.style.display="none"
            }
        })
    })
})