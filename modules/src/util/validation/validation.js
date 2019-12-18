import Validators from 'validator';

export function registerValidation(data){
	var errors = {};
	var isValid = true;
	if (Validators.isEmpty(data.email)) {
    errors.email = "Email field is required";
    isValid=false;
	} else if (!Validators.isEmail(data.email)) {
	    errors.email = "Please Enter Valid Email";
	    isValid=false;
	}
	if (Validators.isEmpty(data.password)) {
	    errors.password = "Password field is required";
	    isValid=false;
	}
	if (Validators.isEmpty(data.username)) {
	    errors.name = "Name field is required";
	    isValid=false;
	} else {
		var name =data.username.replace(/\s/g,'');
		if(!Validators.isAlpha(name)) {
	    	errors.name = "Only Letters Are Allowed";
	    	isValid=false;
		}
	}
	if (Validators.isEmpty(data.phone)) {
	    errors.phone = "Phone field is required";
	    isValid=false;
	} else {
		if(data.phone.length<10) {
			errors.phone="Minimum 10 Digit is Required";
			isValid = false;
		} else if(!Validators.isDecimal(data.phone)){
			errors.phone = "Phone Number Must Be Decimal";
			isValid = false;
		}
	}
	if(!isValid) {
		return {status:0,errors:errors};
	} else {
		return {status:1};
	}
}

export function loginValidation(data) {

	var errors = {};
	var isValid = true;
	if (Validators.isEmpty(data.email)) {
    errors.email = "Email field is required";
    isValid=false;
	} else if (!Validators.isEmail(data.email)) {
	    errors.email = "Please Enter Valid Email";
	    isValid=false;
	}
	if (Validators.isEmpty(data.password)) {
	    errors.password = "Password field is required";
	    isValid=false;
	}
	if(!isValid) {
		return {status:0,errors:errors};
	} else {
		return {status:1};
	}
}