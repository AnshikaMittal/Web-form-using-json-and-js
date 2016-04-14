var data = 
[{
	"type": "title",
	"label": "FEEDBACK FORM",
	"options": "",
	"data": ""
}, {
	"type": "textbox",
	"label": "NAME",
	"options": "",
	"data": ""
}, {
	"type": "checkbox",
	"label": "RATING",
	"options": "1;2;3",
	"data": ""
}]

var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Creating a new form
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post");
x.appendChild(createform);


var linebreak = document.createElement('br');
createform.appendChild(linebreak);
// ------- first input
var namelabel = document.createElement('label'); // Create Label 
namelabel.innerHTML = data[0].label; // Set Field Labels
createform.appendChild(namelabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);
var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//--------- second input
var secondinput = document.createElement('label'); // Create Label for second json object
secondinput.innerHTML = data[1].label; 
createform.appendChild(secondinput);

var secondelement = document.createElement('input'); 
secondelement.setAttribute("type", data[1].type);
secondelement.setAttribute("id", "id2");
secondelement.setAttribute("value", "");
secondelement.setAttribute("name", "secondinput");
createform.appendChild(secondelement);

var secondbreak = document.createElement('br');
createform.appendChild(secondbreak);
var secondbreak = document.createElement('br');
createform.appendChild(secondbreak);

// ------- third input
var thirdlabel = document.createElement('label'); 
thirdlabel.innerHTML = data[2].label;
createform.appendChild(thirdlabel);

var thirdelement1 = document.createElement('input');
thirdelement1.setAttribute("type", data[2].type);
var thirdlabel1 = document.createElement('label'); 
thirdlabel1.innerHTML = data[2].options[0];
thirdelement1.setAttribute("name", "thirdinput1");
thirdelement1.setAttribute("id","id3_1");

var thirdelement2 = document.createElement('input');
thirdelement2.setAttribute("type", data[2].type);
var thirdlabel2= document.createElement('label'); 
thirdlabel2.innerHTML = data[2].options[2];
thirdelement2.setAttribute("name", "thirdinput2");
thirdelement2.setAttribute("id","id3_2");

var thirdelement3 = document.createElement('input');
thirdelement3.setAttribute("type", data[2].type);
var thirdlabel3 = document.createElement('label'); 
thirdlabel3.innerHTML = data[2].options[4];
thirdelement3.setAttribute("name", "thirdinput3");
thirdelement3.setAttribute("id","id3_3");

createform.appendChild(thirdelement1);
createform.appendChild(thirdlabel1);
createform.appendChild(thirdelement2);
createform.appendChild(thirdlabel2);
createform.appendChild(thirdelement3);
createform.appendChild(thirdlabel3);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);


function myfunc()
{
	var a = document.getElementById("id2").value;
	console.log(a);
	data[1].data = a;
	var x1 = document.getElementById("id3_1");
	var x2 = document.getElementById("id3_2");
	var x3 = document.getElementById("id3_3");
	if(x1.checked == true && x2.checked == true && x3.checked == true)
	{
		var s =data[2].options[0] + " " + data[2].options[2] + " " + data[2].options[4];
		data[2].data = s;
	}
	else if(x1.checked == true && x2.checked == true)
	{
		var s =data[2].options[0] + " " + data[2].options[2];
		data[2].data = s;
	}
	else if(x2.checked == true && x3.checked == true)
	{
		var s =data[2].options[2] + " " + data[2].options[4];
		data[2].data = s;
	}
	else if(x1.checked == true && x3.checked == true)
	{
		var s =data[2].options[0] + " " + data[2].options[4];
		data[2].data = s;
	}
	
	else if(x1.checked == true)
	{
		console.log(data[2].options[0]);
		data[2].data=data[2].options[0];
	}
	else if(x2.checked == true)
	{
		console.log(data[2].options[2]);
		data[2].data=data[2].options[1];
	}
	else if(x3.checked == true)
	{
		console.log(data[2].options[4]);
		data[2].data=data[2].options[2];
	}
	console.log(data[1].data);
	console.log(data[2].data);
	var jsonStr = JSON.stringify(data);
	
	document.getElementById("display").innerHTML = "<b>" + "OUTPUT" + "</b>" +"<br>" + jsonStr;
	
}

