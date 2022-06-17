var b1 = $("#green");
var b2 = $("#red");
var b3 = $("#yellow");
var b4 = $("#blue");
var level = 1;
var arr = [];
var clk = 0;
var ii = 0;

function ran(){
    var rn = Math.random()*4;
    rn = Math.floor(rn)+1;
    return rn;
}

function buttonReturn(s){
    if(s == 1)
        return b1;
    else if(s == 2)
        return b2;
    else if(s == 3)
        return b3;
    else
        return b4;
}
function jhatka(s){
    var currentButton = buttonReturn(s);
    
    currentButton.addClass("pressed");

    setTimeout(function() {
        currentButton.removeClass("pressed");
    }, 100);
    console.log(currentButton);
}

startingFunction();

function startingFunction(){
    $(document).keypress(function (e) {
        main();
    });

}

function main() {
    
        // alert("go");
        $("#level-title").text("Level "+level);

              
        arr[ii] = ran();
        jhatka(arr[ii]);


        b1.click(function (e) {
            clk = 1;
            jhatka(clk);
            proceed(clk);
        });
        b2.click(function (e) {
            clk = 2;
            jhatka(clk);
            proceed(clk);
        });
        b3.click(function (e) {
            clk = 3;
            jhatka(clk);
            proceed(clk);
        });
        b4.click(function (e) {
            clk = 4;
            jhatka(clk);
            proceed(clk);
        });


}

function proceed(clk){
    
}