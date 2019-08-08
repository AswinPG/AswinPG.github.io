document.addEventListener("DOMContentLoaded", event => {
    delay=100;
    console.log(delay)
    timer=window.setTimeout(function (){
    f=document.getElementById("fire");

     k=1;
     var j="";
     //f.style.opacity=i;
    for(i=1;i<delay;i++)
    { // creates delay between blinks
       dummy=0;
       j = k.toString() ;

       f.style.opacity = j;
       for(d=50;d<delay;d++)
        {
            dummy=0
        }
       console.log(f.style.opacity);
       k= k- 0.01 ;
    }

    f.style.opacity="1";
    console.log( typeof( f.style.opacity));
       //f.style.display="none";
    },5000);


})