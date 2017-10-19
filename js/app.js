/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

// var newName1 = document.getElementById("name1");
// newName1.innerHTML = "Tay-Tay";

// // var pElem = document.getElementById("hours");
// // pElem.innerHTML = "Sun - Sat 9am - 8pm";



// // var liElem = document.getElementsByClassName("food");
// // liElem[0].innerHTML = "meat jun";

// // var newMenu = ["bacon", "tonkatsu", "kalua pork", "ham", "char siu", "pork chops", "pork rinds",  "bbq ribs"];

// // for(var i = 0; i<newMenu.length; i++){
// //   var liElem = document.createElement("li");
// //   liElem.classname = "food";
// //   liElem.innerHTML = newMenu[i];
// //   menu.appendChild(liElem);
  
// // }

// /*2. DJ Khaled

// Find the div with the id of "position2" and replace the n/a with the following: 

// Project Manager*/

// var newPosition2 = document.getElementById("position2");
// newPosition2.innerHTML = "Project Manager";

// /*3. Piko Taro

// Find the div with the id of "alias3" and replace the n/a with the following:

// Concatenation*/

// var newAlias3 = document.getElementById("alias3");
// newAlias3.innerHTML = "Concatenation";


// /*4. Prince

// Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

// var newProfile0 = document.getElementsByClassName("profile");
// newProfile0[0].innerHTML = "I just want your kiss.";


// 5. Bruce Lee

// Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.

// var newProfile1 = document.getElementsByClassName("profile");
// newProfile1[1].innerHTML = "Be like water.";



// /*6. Samuel L Jackson

// Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

// var newAlias2 = document.getElementsByClassName("alias");
// newAlias2[2].innerHTML = "Lazarus";


// /*7. Peter Griffin

// Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

// Append this div element to the nameParent div*/

// // var h1Elem = document.createElement("h1");
// // h1Elem.id = "name";
// // h1Elem.innerHTML = "Juniper Tree";
// // h1Elem.style.color = "cornflowerblue";
// // document.body.appendChild(h1Elem);
 
// var divName7 = document.createElement("div");
// divName7.id = "name7";
// divName7.innerHTML = "Peter Griffin";
// document.getElementById("nameParent").appendChild(divName7);

// /*8. Tim Duncan

// Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

// Append this div element to the aliasParent div.*/

// var divAlias8 = document.createElement("div");
// divAlias8.id = "alias8";
// divAlias8.innerHTML = "Old Man Riverwalk";
// document.getElementById("aliasParent").appendChild(divAlias8);


//Final Boss
/*9. Create your own profile.*/

//*** THESE ARE MY REFERENCES BELOW***

// <div class="row">
//       <div class="block1 col-sm-4"><img src="https://mfi-miami.com/wp-content/uploads/2013/01/peter-griffin_400x400.jpg" alt="">
//       <div id="nameParent">
//       </div>
//         <div id="position7">The Family Guy</div>
//         <div id="alias7">Kichwa Tembo</div>
//         <div id="bio7">"I've got an idea--an idea so smart that my head would explode if I even began to know what I'm talking about."</div>
//         </div>

// var h1Elem = document.createElement("h1");
// h1Elem.id = "name";
// h1Elem.innerHTML = "Juniper Tree";
// h1Elem.style.color = "cornflowerblue";
// document.body.appendChild(h1Elem);

// var h2Elem = document.createElement("h2");
// h2Elem.id = "tag";
// h2Elem.innerHTML = "We Don't Fall Far From the Tree.";
// h2Elem.style.color = "orange";
// h2Elem.style.fontSize = "20px";
// h1Elem.appendChild(h2Elem);

// var pElem = document.createElement("p");
// pElem.id = "hours";
// pElem.innerHTML = "Sun - Sat 9pm - 6am";
// document.body.appendChild(pElem);
//*/

//**FIRST ATTEMPT
// divClass.class = "block2 col-sm-4";
// divClass.img.src = "https://uproxx.files.wordpress.com/2014/11/wlgrumpycat.jpg?quality=100&w=650" alt = "Grumpy Face";
// divClass.getElementsByClassName()

var divClass2 = document.getElementsByClassName("block3 col-sm-4");	
divClass2[2].innerHTML = "<img src = https://am21.akamaized.net/tms/cnt/uploads/2016/03/Grumpy-Cat.jpg>";


// var name9Elem = document.createElement("div");
// name9Elem.id = "name9";
// name9Elem.innerHTML = "Grumpy Cat";
// document.getElementsByClassName("block3 col-sm-4").appendChild(name9Elem);

// var position9Elem = document.createElement("div");
// position9Elem.id = "position9";
// position9Elem.innerHTML = "Resident Evil";
// document.getElementsByClassName("block3 col-sm-4").appendChild(position9Elem);

// var alias9Elem = document.createElement("div");
// alias9Elem.id = "alias9";
// alias9Elem.innerHTML = "Eeyore";
// document.getElementsByClassName("block3 col-sm-4").appendChild(alias9Elem);



