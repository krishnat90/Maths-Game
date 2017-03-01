 var playing = false;
var score,time,correctanswer;

            document.getElementById("start").onclick = function(){
                if(playing == true)
                    {
                       location.reload();
                    }
                else
                {
                    playing = true;
                    document.getElementById("start").innerHTML = "Reset game";
                    hide("gameover");
                    score = 0;
                    document.getElementById("spanscore").innerHTML = score;
                    show("timeremaining");
                    time = 60;
                    reducetime();
                    generateqa();
                    
                }
            }
            
            
            for(i=1; i<5; i++)
                {
                    document.getElementById("box"+i).onclick = function(){
                        if(playing == true)
                            {
                                if(this.innerHTML == correctanswer){
                                    score = score + 2;
                                    document.getElementById("spanscore").innerHTML = score;
                                    show("right");
                                    var rightmsg = setTimeout(function(){hide("right");},200);
                                    generateqa();
                                }
                                else{
                            score = score - 1;
                            document.getElementById("spanscore").innerHTML = score;
                            show("wrong");
                            var wrongmsg = setTimeout(function(){hide("wrong");},200);
                            generateqa();
                                }
                            }
                        
                    }
                }

          
            
            function generateqa(){
                var x = 1+ Math.round(9*Math.random());
                var y = 1+ Math.round(9*Math.random());
                document.getElementById("question").innerHTML = x + "x" + y;
                correctanswer = x * y;
                var correctPosition = 1+ Math.round(3*Math.random());
                document.getElementById("box"+correctPosition).innerHTML = correctanswer; 
                
                for(i=1; i<5; i++)
                    {
                        if(i != correctPosition)
                            {
                                wronganswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
                                document.getElementById("box"+i).innerHTML = wronganswer; 
                                
                            }
                    }
                
                
            }
            
            function reducetime(){
                var ctr = document.getElementById("timeremain");
                var myctr = setInterval(function(){
                    ctr.innerHTML = time;
                    time = time - 1;
                    if(time < 0)
                        {
                            clearInterval(myctr);
                            playing = false;
                            hide("timeremaining");
                            show("gameover");
                            document.getElementById("finalscore").innerHTML = score;
                        }
                    },1000);
            }

function show(id){
    document.getElementById(id).style.display = "block"; 
}
function hide(id){
    document.getElementById(id).style.display = "none"; 
}