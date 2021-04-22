/******w***********
    
    Project 2 Javascript
    Name: Neil De Guzman
    Date: 2021-04-09
    Description: Project 2 Javascript

******************/

document.addEventListener("DOMContentLoaded", load);

function load()
{
	hideAllErrors();

	document.getElementById("regEx").addEventListener("submit", validate);
	document.getElementById("regEx").reset();
	document.getElementById("regEx").addEventListener("reset", resetForm);
}

function validate(e){
	
	hideAllErrors();

	if(formHasErrors())
	{
		e.preventDefault();

		return false;
	}

	return true;
}

function resetForm(e)
{
	if (confirm("Clear form?"))
	{
		hideAllErrors();
		
		document.getElementById("name").focus();

		return true;
	}

	e.preventDefault();
	
	return false;	
}

function formHasErrors()
{
	let errorFlag = false;

	let requiredFields = ["name", "email", "phone", "comment"];

	for (let i=0; i<requiredFields.length; i++)
	{
		let inputField = document.getElementById(requiredFields[i]);

		if (inputField.value.length === 0)
		{
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			if (!errorFlag)
			{
				inputField.focus();
				inputField.select();
			}

			errorFlag = true;
		}
	}

	let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	let emailAddress = document.getElementById("email").value;

	if(!emailRegex.test(emailAddress))
	{
		document.getElementById("Invalidemail_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	let phoneRegex = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
	let phoneNumber = document.getElementById("phone").value;

	if(!phoneRegex.test(phoneNumber))
	{
		document.getElementById("Invalidphone_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("phone").focus();
			document.getElementById("phone").select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

function hideAllErrors()
{
	var errorFields = document.getElementsByClassName("error");

	for(var i = 0;i < errorFields.length; i++)
	{
		errorFields[i].style.display = "none";
	}
}
