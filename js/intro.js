//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

$("#box").hide();

$("#button").click(function(){
    $("#box").toggle();
    });

   
    document.getElementById('box').addEventListener('click', function()
    {
        this.classList.remove('anibox');
        void this.offsetWidth;

        this.classList.add('anibox');

        this.style.animationPlayState='running';
    });


    var name=document.getElementById('name');
    var box=document.getElementById('box');

    name.addEventListener('click', function(){
        box.style.backgroundColor='red';
    });


});






