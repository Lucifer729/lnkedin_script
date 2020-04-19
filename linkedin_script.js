var contacts=document.querySelectorAll("[data-control-name='people_connect']");
var no= document.getElementsByClassName("member-insights member-insights--discover-center-align")
for (var i=0;i<contacts.length;i++){
	//if(member-insights__reason text-align-left t-12 t-black--light t-normal)
	var mutual_conn=no[i].innerText.slice(1,3)
	//var mutual_conn=no.slice(1,3);
	if(mutual_conn>=30){ //can be changed according to user preference
		contacts[i].click();
		console.log("clicked");
	}
}

