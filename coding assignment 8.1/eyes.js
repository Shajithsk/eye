var balls = document.getElementsByClassName("ball");
    document.onmousemove = function(event){
        var x = event.clientX * 100 / window.innerWidth + "%";
        var y = event.clientY * 100 / window.innerHeight + "%";
        console.log(x,y,event.clientX,event.clientY,window.innerWidth)

        for(var i=0; i<2; i++){
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-"+x+",-"+y+")";

        }
    }
    



    