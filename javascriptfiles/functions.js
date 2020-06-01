var form= document.getElementById("form");
form.addEventListener("change", totals);

function totals(){
	var totalcompleteresult=0;
	console.log("beep beep updating");
	var styleArray=document.getElementsByClassName("styleclass");
	
	for (i=0;i<styleArray.length;i++){
		
		if (styleArray[i].checked){
			
		totalcompleteresult = Number(styleArray[i].value); } }
		
		
		
	var tipArray=document.getElementsByClassName("tipclass");
	
	for (i=0; i<tipArray.length;i++){
		
		if (tipArray[i].checked){
			
			totalcompleteresult *= (1 + tipArray[1].value/100); } }
	
	totalcompleteresult= totalcompleteresult.toFixed(2);
	
	var total=document.getElementById("smash");
	total.innerHTML=totalcompleteresult;}

/*if (zipcode>20000){
return true;} else{ return false;}*/