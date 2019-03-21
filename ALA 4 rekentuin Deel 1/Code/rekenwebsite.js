//Function voor leren
let tafel

function myFunction() {
  tafel = document.getElementById("tafel").value;
  document.getElementById("Input").innerHTML = "";
  if (tafel <= 10 && tafel >= 1) {
    var tv1 = 1;
    for (tv1 = 1; tv1 < 11; tv1++) {
      var t1 = tafel + " x " + tv1 + " = " + tv1 * tafel + "<br>";
      document.getElementById("Input").innerHTML += t1;
    }
  }
  if (tafel <= 0 || tafel >= 11) {
    var tfout = "Deze tafel is niet beschikbaar.";
    document.getElementById("Input").innerHTML += tfout;
  }
}

let inputs = new Array(10).fill(0)

//Function voor toetsen
function myFunction2() {
   inputs =  inputs.map(() => document.createElement("input"))

//   onpoint = document.createElement("Input");
//   onpoint1 = document.createElement("Input");
//   onpoint2 = document.createElement("Input");
//   onpoint3 = document.createElement("Input");
//   onpoint4 = document.createElement("Input");
//   onpoint5 = document.createElement("Input");
//   onpoint6 = document.createElement("Input");
//   onpoint7 = document.createElement("Input");
//   onpoint8 = document.createElement("Input");
//   onpoint9 = document.createElement("Input");

    inputs.forEach((input, i) => {
        input.className = "yes" + (i+1)
        document.body.appendChild(input)
    })

//   onpoint.className = "yes2";
//   document.body.appendChild(onpoint);
//   onpoint1.className = "yes1";
//   document.body.appendChild(onpoint1);
//   onpoint2.className = "yes3";
//   document.body.appendChild(onpoint2);
//   onpoint3.className = "yes4";
//   document.body.appendChild(onpoint3);
//   onpoint4.className = "yes5";
//   document.body.appendChild(onpoint4);
//   onpoint5.className = "yes6";
//   document.body.appendChild(onpoint5);
//   onpoint6.className = "yes7";
//   document.body.appendChild(onpoint6);
//   onpoint7.className = "yes8";
//   document.body.appendChild(onpoint7);
//   onpoint8.className = "yes9";
//   document.body.appendChild(onpoint8);
//   onpoint9.className = "yes10";
//   document.body.appendChild(onpoint9);

  tafel = document.getElementById("tafel2").value;
  document.getElementById("Input2").innerHTML = "";
  if (tafel <= 10 && tafel >= 1) {
    var tv2 = 1;
    for (tv2 = 1; tv2 < 11; tv2++) {
      var t2 = tafel + " x " + tv2 + " = " + "<br>";
      document.getElementById("Input2").innerHTML += t2;
    }
  }
  if (tafel <= 0 || tafel >= 11) {
    var tfout2 = "Deze tafel is niet beschikbaar.";
    document.getElementById("Input2").innerHTML += tfout2;
  }
  tv2.className = "tv2";
  tafel.className = "tafel2";

  document.getElementById("button2").disabled = true;

  var submitawnser = document.createElement("BUTTON");
  var submitbtn = document.createTextNode("Submit");
  submitawnser.appendChild(document.createTextNode("Submit"));
  submitawnser.onclick = myBestFunction;
  document.body.appendChild(submitawnser);
  submitawnser.className = "submootbtn";

  function myBestFunction() {
    let x = 0
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]
        if (Number(input.value) === (i + 1) * tafel) {
            input.style.backgroundColor = "green"
        } else {
            input.style.backgroundColor = "red"
            x++
        }
    }

    if (x >= 5) {
        alert(x + " Fouten. Je kunt het beste op het werkblad oefenen")
    }
  }
}
