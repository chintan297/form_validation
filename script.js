var form = document.getElementById("form");
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var mobileNo = document.getElementById("mobileNo");
var age = document.getElementById("age");
var gender = document.getElementsByName("gender");
var education = document.getElementById("education");
var dob = document.getElementById("dob");
var hobbies = document.getElementsByName("hobbies");
var color = document.getElementById("color");
var acNumber = document.getElementById("accountNumber");
var r_AcNumber = document.getElementById("c_accountNumber");
var ifscCode = document.getElementById("ifscCode");
var h_no = document.getElementById("h_no");
var soc_name = document.getElementById("soc_name");
var landmark = document.getElementById("landmark");
var area = document.getElementById("area");
var pincode = document.getElementById("pincode");
var country = document.getElementById("country");
var pr_address = document.getElementById("permanent_address");
var p_h_no = document.getElementById("p_h_no");
var p_soc_name = document.getElementById("p_soc_name");
var p_landmark = document.getElementById("p_landmark");
var p_area = document.getElementById("p_area");
var p_pincode = document.getElementById("p_pincode");
var p_country = document.getElementById("p_country");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submit");
  formValidation();
});

const printError = (err, msg, color = "red") => {
  document.getElementById(err).innerHTML = msg;
  document.getElementById(err).style.color = color;
};

const formValidation = () => {
  let fNameError =
    (lNameError =
    genderError =
    emailError =
    educationError =
    dobError =
    hobbiesError =
    accNoError =
    conAccNoError =
    IFSCError =
    h_noError =
    socNameError =
    landmarkErrorv =
    areaError =
    pincodeError =
    countryError =
    p_h_noError =
    p_soc_nameError =
    p_landmarkError =
    p_areaError =
    p_pinCodeError =
    p_countryError =
      true);
  var firstName = fName.value;

  if (firstName.trim().length < 1) {
    printError("fNameError", "Please Enter First Name");
  } else {
    var regName = /^[a-zA-Z ]{2,30}$/;
    if (!regName.test(firstName)) {
      printError("fNameError", "Please Enter valid First Name");
    } else {
      printError("fNameError", "");
      fNameError = false;
    }
  }

  var lastName = lName.value;
  if (lastName.trim().length < 1) {
    printError("lNameError", "Please Enter Last Name");
  } else {
    var regName = /^[a-zA-Z ]{2,30}$/;
    if (!regName.test(lastName)) {
      printError("lNameError", "Please Enter valid Last Name");
    } else {
      printError("lNameError", "");
      lNameError = false;
    }
  }

  var nEmail = email.value;
  if (nEmail.trim().length < 1) {
    printError("emailError", "Please Enter Email");
  } else {
    var regName = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regName.test(nEmail)) {
      printError("emailError", "Please Enter valid Email");
    } else {
      printError("emailError", "");
      emailError = false;
    }
  }

  var nMobileNo = mobileNo.value;
  if (nMobileNo.trim().length < 1) {
    printError("mobileNoError", "Please Enter Number");
  } else {
    var regName = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!regName.test(nMobileNo)) {
      printError("mobileNoError", "Please Enter valid Number");
    } else {
      printError("mobileNoError", "");
      mobileNoError = false;
    }
  }

  var nAge = age.value;
  if (nAge.trim().length < 1) {
    printError("ageError", "Please Enter Number");
  } else {
    var regName = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    if (!regName.test(nAge)) {
      printError("ageError", "Please Enter valid Number");
    } else {
      printError("ageError", "");
    }
  }

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      var nGender = gender[i].value;
    }
  }
  if (!nGender) {
    printError("genderError", "Please Select Gender");
  } else {
    printError("genderError", "");
    genderError = false;
  }

  var nEducation = education.value;
  if (!nEducation) {
    printError("educationError", "Please Select Education");
  } else {
    printError("educationError", "");
    educationError = false;
  }

  var nDOB = dob.value;
  var userDate = new Date(nDOB).getTime();
  let today = new Date().getTime();
  let userYear = new Date(nDOB).getFullYear();
  let thisYear = new Date().getFullYear();

  var userAge = thisYear - userYear;

  if (!nDOB) {
    printError("dobError", "Please Select Date Of Birth");
  } else {
    if (userDate > today) {
      printError("dobError", "Your Date is grater than today");
    } else {
      printError("dobError", "");
    }
  }
  if (userAge != nAge) {
    printError("dobError", "Your age and dob not matched");
    printError("ageError", "Your age and dob not matched");
  } else {
    ageError = false;
    dobError = false;
  }
  var nHobbies = [];
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      nHobbies.push(hobbies[i].value);
    }
  }
  if (nHobbies.length > 0) {
    printError("hobbiesError", "");
    hobbiesError = false;
  } else {
    printError("hobbiesError", "Please Enter Hobbies");
  }

  var accNumber = acNumber.value;
  if (accNumber.trim().length < 1) {
    printError("accNoError", "Please Enter Account Number");
  } else {
    var regName = /^[0-9]{9,18}$/;
    if (!regName.test(accNumber)) {
      printError("accNoError", "Please Enter valid Account Number");
    } else {
      printError("accNoError", "");
      accNoError = false;
    }
  }
  var reAccNumber = r_AcNumber.value;
  if (reAccNumber.trim().length < 1) {
    printError("conAccNoError", "Please Enter Re Account Number");
  } else {
    var regName = /^[0-9]{9,18}$/;
    if (!regName.test(reAccNumber)) {
      printError("conAccNoError", "Please Enter valid Re Account Number");
    } else {
      printError("conAccNoError", "");
      re = false;
    }
  }

  var IFSCCode = ifscCode.value;
  if (IFSCCode.trim().length < 1) {
    printError("IFSCError", "Please Enter IFSC Code");
  } else {
    var regName = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!regName.test(IFSCCode)) {
      printError("IFSCError", "Please Enter valid IFSC Code");
    } else {
      printError("IFSCError", "");
      IFSCError = false;
    }
  }

  var houseNo = h_no.value;
  if (!houseNo) {
    printError("h_noError", "Please Enter House/Plot/Building Number");
  } else {
    printError("h_noError", " ");
    h_noError = false;
  }
  var socName = soc_name.value;
  if (!socName) {
    printError("socNameError", "Please Enter Street/Society Name");
  } else {
    printError("socNameError", " ");
    socNameError = false;
  }
  var nLandmark = landmark.value;
  if (!nLandmark) {
    printError("landmarkError", "Please Enter Landmark");
  } else {
    printError("landmarkError", " ");
    landmarkError = false;
  }
  var nArea = area.value;
  if (!nArea) {
    printError("areaError", "Please Enter Area");
  } else {
    printError("areaError", " ");
    areaError = false;
  }
  var nPincode = pincode.value;
  if (nPincode.trim().length < 1) {
    printError("pincodeError", "Please Enter Pincode");
  } else {
    var regName = /^[0-9]{6}$/;
    if (!regName.test(nPincode)) {
      printError("pincodeError", "Please Enter Pincode");
    } else {
      printError("pincodeError", "");
      pincodeError = false;
    }
  }

  var nCountry = country.value;
  if (!nCountry) {
    printError("countryError", "Please Select Country");
  } else {
    printError("countryError", "");
    countryError = false;
  }


  var prHouNo = p_h_no.value;
  if (!prHouNo) {
    printError("p_h_noError", "Please Enter House/Plot/Building Number");
  } else {
    printError("p_h_noError", " ");
    p_h_noError = false;
  }
  var pSocName = p_soc_name.value;
  if (!pSocName) {
    printError("p_soc_nameError", "Please Enter Street/Society Name");
  } else {
    printError("p_soc_nameError", " ");
    p_soc_nameError = false;
  }
  var pLandmark = p_landmark.value;
  if (!pLandmark) {
    printError("p_landmarkError", "Please Enter Landmark");
  } else {
    printError("p_landmarkError", " ");
    p_landmarkError = false;
  }
  var pArea = p_area.value;
  if (!pArea) {
    printError("p_areaError", "Please Enter Area");
  } else {
    printError("p_areaError", " ");
    p_areaError = false;
  }
  var pPincode = pincode.value;
  if (pPincode.trim().length < 1) {
    printError("p_pincodeError", "Please Enter Pincode");
  } else {
    var regName = /^[0-9]{6}$/;
    if (!regName.test(pPincode)) {
      printError("p_pincodeError", "Please Enter Pincode");
    } else {
      printError("p_pincodeError", "");
      p_pincodeError = false;
    }
  }

  var pCountry = p_country.value;
  if (!pCountry) {
    printError("p_pinCodeError", "Please Select Country");
  } else {
    printError("p_pinCodeError", "");
    p_pinCodeError = false;
  }
};
const handelFullName = () => {
  fullName.value = fName.value + " " + lName.value;
};

const handelAccountNumber = () => {
  var accNumber = acNumber.value;
  var reAccNumber = r_AcNumber.value;
  if (accNumber === reAccNumber) {
    console.log("Right Account Number");
    printError("conAccNoError", "Account Number Matched", "green");
  } else {
    printError("conAccNoError", "Account Number is not matched");
  }
};
const handelAddress = () => {
  const check_address = pr_address.checked;

  if (check_address) {
    document.getElementById("p_h_no").value = h_no.value
    document.getElementById("p_soc_name").value = soc_name.value
    document.getElementById("p_landmark").value = landmark.value
    document.getElementById("p_area").value =area.value
    document.getElementById("p_pincode").value = pincode.value
    document.getElementById("p_country").value = country.value
  }
};
