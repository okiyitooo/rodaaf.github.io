/*if zipcode is in "list" display:"we've got your area covered!"
if zipcode isn't, display: "sorry, we haven't expanded to that area yet*/
var zipElem = document.getElementById("zipCheck");
var zipBtn = document.getElementById("zipChecker");
var zipInput = document.getElementById("zipCode");

zipBtn.addEventListener("click",function(e){
	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipInput.value);
	if (isValidZip && zipInput.value >= 20000){
		zipElem.innerHTML="we've got your area covered!";
		zipElem.className="grn";
	}else { 
		zipElem.innerHTML="sorry, we haven't expanded to that area yet";
		zipElem.className="red";
		}
		e.preventDefault();
});
	