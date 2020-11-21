//Helper functions

//Pick color out of the colors array
function decider (){
    var random = Math.floor(Math.random()*colors.length);
    return random; //returns a number
}

//Generates random RGB values
function random_color_gen(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

     return `rgb(${r}, ${g}, ${b})`; 
}

//Generates the colors array
function colors_array_function(num){
    //make an array
    let output = [];

    for (let i = 0; i < num; i++ ){
        //add num random colors to the array
        output.push(random_color_gen());

    }
    // return array
    return output;
}

var num_squares=6;

var colors = colors_array_function(num_squares);
 
// Select elements
var squares = document.querySelectorAll(".square");
var color_display = document.getElementById("color_display");
var msg = document.getElementById("msg");
var title = document.querySelector("h1");
// var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");


//reset button logic
// reset.addEventListener("click", function reset(){
//     colors = colors_array_function(num_squares);
//     winning_color = colors[decider()];
//     color_display.textContent = winning_color.toUpperCase();
//     for (let i = 0; i < colors.length; i++){
//         squares[i].style.backgroundColor= colors[i];
//     }
//     title.style.backgroundColor="black";
//     msg.textContent="";
// })

//easy button logic
easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    msg.textContent="";
    title.style.backgroundColor="black";
    num_squares = 3;
    colors = colors_array_function(num_squares);
    winning_color = colors[decider()];
    color_display.textContent = winning_color.toUpperCase();

    for(let i = 0 ; i <3; i++){
        squares[i].style.backgroundColor=colors[i];
    }
    for (let i = 3 ; i < 6; i++){
        squares[i].style.backgroundColor= "black";
    }

})

//hard button logic
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    num_squares= 6;
    msg.textContent="";
    title.style.backgroundColor="black";
    colors = colors_array_function(num_squares);
    winning_color = colors[decider()];
    color_display.textContent = winning_color.toUpperCase();
    for (let i = 0; i < num_squares ; i++){
        squares[i].style.backgroundColor  = colors[i];
    }
})

// Winning color
var winning_color = colors[decider()];

// Update hint
color_display.textContent = winning_color.toUpperCase();



// Set up squares
for (let i = 0; i < num_squares ; i++){
    squares[i].style.backgroundColor  = colors[i];
    
    // Add click listners
    squares[i].addEventListener("click", function click(){
        // Get the color of the clicked square
        var clicked_color = squares[i].style.backgroundColor;

        // Compare that color to winning_color
        if(clicked_color==winning_color){
            msg.textContent=("CORRECT")
            for(let x = 0; x < num_squares; x++){
                squares[x].style.backgroundColor= winning_color;
            }
            title.style.backgroundColor= winning_color;  

        }
        else{
            squares[i].style.backgroundColor = "black";
        }
    })
}






