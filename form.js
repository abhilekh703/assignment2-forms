function validate()
{

	var pass1 = document.getElementById("pass").value;
	var pass2 = document.getElementById("rpass").value;


	if(pass1.lenght > 15 || pass1.length < 6 )
	{
		alert("enter password of length between 6 and 15");
		return false;
	}

	if(pass1 != pass2)
	{
		alert("password does not match");
		return false;
	}

	if(document.myform.firstname.value == "")
	{
		alert("Please provide First Name");
		document.myform.firstname.focus();
		return false;
	}

	if(document.myform.lastname.value == "")
	{
		alert("Please provide Last Name");
		document.myform.lastname.focus();
		return false;
	}

	var x=document.myform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
	{  
  		alert("Please enter a valid e-mail address");  
  		return false;
  		document.myform.email.focus();
  	}


  	var phone_exp = /^\d{10}$/ ;
  	if(document.myform.phone.value.match(phone_exp))
  	{
  		return true;
  	}
  	else
  	{
  		alert("Enter valid Phone Number");
  		document.myform.phone.focus();
  		return false;

  	}

  	if(document.myform.age.value == "")
	{
		alert("Please provide valid");
		document.myform.lastname.focus();
		return false;
	}

	if(document.myform.address.value == "")
	{
		alert("Please provide Address");
		document.myform.address.focus();
		return false;
	}


}
