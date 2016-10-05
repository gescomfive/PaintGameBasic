var canvasData;



canvas_x = null;
canvas_y = null;
var last_touches = {x:null, y:null};
var red = 'rgba(255,0,0,0.6)'
var orange = 'rgba(39,163,170,0.6)'
var purple = 'rgba(199, 59, 154,0.6)'
var pink = 'rgba(255,182,193,0.6)'
var yellow = 'rgba(255,255,0,0.6)'
var green = 'rgba(0,174,39,0.6)'
var current_brush = green;
var current_color = green;
var paint = false;
var small = true;
var canvasWidth = 320;
var canvasHeight = 568;
var canvas = document.getElementById('canvas');

function create_canvas(canvas_div) {


    canvas_div = document.getElementById(canvas_div);
    canvas = document.createElement('canvas');
    canvas.style.backgroundImage = "url('white.jpg')";
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');


    canvas.addEventListener('touchstart', function(e){
        e.preventDefault();   
        touchstart(e)
    });
    canvas.addEventListener('touchmove', function(e) {
                                e.preventDefault();
                                touchmove(e);
                                });
    canvas.addEventListener('touchend', touchend);
    
    // Red Button
    red_btn = document.createElement('div');
    red_btn.id = 'red_btn';

     red_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','red_btn_down');
         
     });
    red_btn.addEventListener('touchend', function(e){
       

        changeRed(e)
    });

// Orange Button
    orange_btn = document.createElement('div');
    orange_btn.id = 'orange_btn';

     orange_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','orange_btn_down');
         
     });
    orange_btn.addEventListener('touchend', function(e){
        

        changeOrange(e)
    });



    // Green Button
    green_btn = document.createElement('div');
    green_btn.id = 'green_btn';
    green_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','green_btn_down');
         
     });
    green_btn.addEventListener('touchend', function(e){
        

        changeGreen(e)
    });

 // purple Button
    purple_btn = document.createElement('div');
    purple_btn.id = 'purple_btn';
    purple_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','purple_btn_down');
         
     });
    purple_btn.addEventListener('touchend', function(e){
        
        changePurple(e)
    });

      // pink Button
    pink_btn = document.createElement('div');
    pink_btn.id = 'pink_btn';
    pink_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','pink_btn_down');
         
     });
    pink_btn.addEventListener('touchend', function(e){
        

        changePink(e)
    });

     // yellow Button
    yellow_btn = document.createElement('div');
    yellow_btn.id = 'yellow_btn';
    yellow_btn.addEventListener('touchstart', function(e){
         e.target.setAttribute('class','yellow_btn_down');
         
     });
    yellow_btn.addEventListener('touchend', function(e){
        

        changeYellow(e)
    });


    small_btn = document.createElement('div');
    small_btn.id = 'small_btn';
    small_btn.setAttribute('class', 'small_btn')
    
    
    small_btn.addEventListener('touchstart', function(e){        
        e.target.setAttribute('class','small_btn_down');
    });
    small_btn.addEventListener('touchend', function(e){

       changeSmall(e);
      
    });

    big_btn = document.createElement('div');
    big_btn.id = 'big_btn';
    big_btn.setAttribute('class', 'big_btn')
    
    
    big_btn.addEventListener('touchstart', function(e){        
        e.target.setAttribute('class','big_btn_down');
    });
    big_btn.addEventListener('touchend', function(e){

       changeBig(e);
      
    });
  
    
    clear_btn = document.createElement('div');
    clear_btn.id = 'clear_btn';
    clear_btn.setAttribute('class', 'clear_btn')
    
    
    clear_btn.addEventListener('touchend', function(e){        
        clearCanvas();
        e.target.setAttribute('class','clear_btn');
    });
    clear_btn.addEventListener('touchstart', function(e){

       e.target.setAttribute('class','clear_btn_down');
      
    });
    
    
    canvas_div.appendChild(canvas);
    canvas_div.appendChild(red_btn);
    canvas_div.appendChild(orange_btn);
    canvas_div.appendChild(green_btn);
    canvas_div.appendChild(purple_btn);
    canvas_div.appendChild(pink_btn);
    canvas_div.appendChild(yellow_btn);
    canvas_div.appendChild(small_btn);
    canvas_div.appendChild(big_btn);
    
  
    canvas_div.appendChild(clear_btn);
}


function changeSmall(){
                small = true
            }
            function changeBig(){
                small = false
            }
            

function changeRed() {
    current_brush = red;
}
function changeGreen() {
    current_brush = green;
}
function changeOrange() {
    current_brush = orange;
}
function changePurple() {
    current_brush = purple;
}
function changePink() {
    current_brush = pink;
}
function changeYellow() {
    current_brush = yellow;
}

function touchstart(e) {
    last_touches.x = e.touches[0].pageX -  canvas.offsetLeft;
    last_touches.y = e.touches[0].pageY - canvas.offsetTop;


    paint = true;
}
function touchend(e) {
    paint = false;
    context = e.target.getContext('2d');
}

function clearCanvas(e) {
context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height);
canvasData = null;
}

/*http://stackoverflow.com/questions/3391477/translating-a-html5-canvas*/

/*function clearCanvas(img) {

    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}*/

function touchmove(e) {

    touches = e.touches[0];
    context = e.target.getContext('2d');

    
    if (paint) {
    brush = current_brush;
    var x, y;
    
    
    canvas_x = touches.pageX - canvas.offsetLeft;
    canvas_y = touches.pageY - canvas.offsetTop;
    
    if (small){
                        context.lineWidth = 50;
                    }else{

                        context.lineWidth = 20;
                    }
        
    
    
    context.strokeStyle = current_brush;
    
    context.moveTo(last_touches.x, last_touches.y)
    
    context.lineTo(canvas_x,canvas_y);
    context.stroke();
    context.closePath()
    context.beginPath()

   last_touches.x = canvas_x
    last_touches.y = canvas_y

        



    

    }
}



function main(){
container = document.createElement('div')
container.id = 'container'
canvas_div = document.createElement('div')
canvas_div.id = 'canvas_div';
container.appendChild(canvas_div)
document.body.appendChild(container)
create_canvas('canvas_div');
}

window.addEventListener('load', main)
