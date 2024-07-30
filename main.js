setInterval(log,10000);

function log() {
    document.getElementById("loadpage")
    .style.visibility="visible";
}



function lrt() {
    document.getElementById("clickpage")
    .style.display="block";
}

function closeclick() {
    document.getElementById("clickpage")
    .style.display="none";
}




setInterval(log2,10000);

function log2() {
    document.getElementById("container")
    .style.visibility="visible";

    document.getElementById("log2")
    .style.visibility="hidden";
}


// function openin() {
//     document.getElementById("demo")
//     .style.color="red";
//     document.getElementById("demo")
//     .innerHTML="Invalid serial number";
//     document.getElementById("demo")
//     .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
// }

function copy() {
    document.getElementById("demo2")
    .style.color="white";
    document.getElementById("demo2")
    .innerHTML="Copied!";
    document.getElementById("demo2")
    .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
}



setInterval(op,10000);


function op() {
    document.getElementById("box3")
    .style.visibility="hidden";

}


// setInterval(showtext,5000);


// function showtext() {
    
// document.getElementById("demopp")
// .style.color="red";
// document.getElementById("demopp")
// .innerHTML="Invalid Serial Number";
// document.getElementById("demopp")
// .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
// }

// setInterval(poo,15000);

// function poo() {
//     document.getElementById("demo")
//     .innerHTML="Invalid Serial Number"

// document.getElementById("demo")
//     .style.color="red";


//     document.getElementById("demo")
//     .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
// }

function openin() {
    document.getElementById("box3")
    .style.visibility="visible";
    document.getElementById("demopp")
    .style.color="red";
    document.getElementById("demopp")
    .innerHTML="Invalid Serial Code";
    document.getElementById("demopp")
    .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
}





// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Confirm Box</h2>


// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>



// </script>

// </body>
// </html>





// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Geolocation</h2>

// <p>Click the button to get your coordinates.</p>

// <button onclick="getLocation()">Try It</button>

// <p id="demo"></p>


// const x = document.getElementById("demopp");

// function myfun() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } catch {
//     x.innerHTML = err;
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }





// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Validation</h2>

// <p>Enter a number and click OK:</p>

// <input id="id1" type="number" min="100" max="300" required>
// <button onclick="myFunction()">OK</button>

// <p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   const inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   } else {
//     document.getElementById("demo").innerHTML = "Input OK";
//   } 
// } 
// </script>

// </body>
// </html>






// function myfun() {


//     const inpObj = document.getElementById("png");
//       if (!inpObj => ) {
//         document.getElementById("pngde").innerHTML = inpObj.validationMessage;
//       }
      
//       else {
//         document.getElementById("pngde").innerHTML = "Input OK";
//        }


// }


function mybtn() {
    let passwd =document.getElementById("pwd1");
    if ( passwd.value === "DE06378265L") {
        prompt("NAME");
        prompt("SURNAME");
        prompt("DATE OF BIRTH");
        prompt("SEX");
        prompt("Country");
       alert("Enable to log in mentor address does not match :LOG AS GUEST");
    }

    else{
        alert("Invalid Code");
    }

}

function openin() {
    let passwd =document.getElementById("pwsssd");
    if ( passwd.value === "DE06378265L") {
        document.getElementById("showpage")
        .style.visibility="visible";
    }

    else{
        document.getElementById("box3")
        .style.visibility="visible";
        document.getElementById("demopp")
        .style.color="red";
        document.getElementById("demopp")
        .innerHTML="Invalid Serial Code";
        document.getElementById("demopp")
        .style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }

}