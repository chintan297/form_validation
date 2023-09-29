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
var pn_pincode = document.getElementById("p_pincode");
var p_country = document.getElementById("p_country");

var rows = document.getElementById("table");
var id = document.getElementById("id");
var isPermanent = true;
var fields = [
  fName,
  lName,
  fullName,
  email,
  mobileNo,
  age,
  gender,
  education,
  dob,
  hobbies,
  color,
  acNumber,
  r_AcNumber,
  ifscCode,
  h_no,
  soc_name,
  landmark,
  area,
  pincode,
  country,
  pr_address,
  p_h_no,
  p_soc_name,
  p_landmark,
  p_area,
  pn_pincode,
  p_country,
  rows,
  id,
];
var errorFields = [
  fNameError,
  lNameError,
  emailError,
  mobileNoError,
  ageError,
  genderError,
  educationError,
  dobError,
  hobbiesError,
  accNoError,
  conAccNoError,
  IFSCError,
  h_noError,
  socNameError,
  landmarkError,
  areaError,
  pincodeError,
  countryError,
  p_h_noError,
  p_soc_nameError,
  p_landmarkError,
  p_areaError,
  p_pinCodeError,
  p_countryError,
];
var perFields = [
  h_no,
  soc_name,
  landmark,
  area,
  pincode,
  country,
  p_h_no,
  p_soc_name,
  p_landmark,
  p_area,
  pn_pincode,
  p_country,
];

var perErrorFields = [
  p_h_noError,
  p_soc_nameError,
  p_landmarkError,
  p_areaError,
  p_pinCodeError,
  p_countryError,
];
var data = [];
let i = 1;

const handelId = () => {
  if (!id.value) {
    id.value = i++;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submit");
  formValidation();
});
let checkBox = [];
// handle checkbox error (onchange)
const handleOthers = (id, errorId) => {
  var check = document.getElementById(id);
  if (check.checked === true) {
    checkBox.push(check.value);
  } else {
    checkBox = checkBox.filter(function (arr) {
      if (arr !== check.value) {
        return true;
      }
    });
  }
  if (checkBox.length < 1) {
    printError(`${errorId}`, `Please Select Hobbies`);
  } else {
    printError(`${errorId}`, "");
  }
};

// handle onkeyup error
const handleInputs = (id, errorId) => {
  if (id == "male" || id == "female" || id == "other") {
    var value = document.getElementById(id).checked;
    console.log(value);
    if (value) {
      handelNormalError(value, id, errorId);
    }
  } else {
    var value = document.getElementById(id).value;
    if (
      id == "country" ||
      id == "p_country" ||
      id == "education" ||
      id == "soc_name" ||
      id == "h_no" ||
      id == "landmark" ||
      id == "area" ||
      id == "pincode" ||
      id == "p_h_no" ||
      id == "p_soc_name" ||
      id == "p_landmark" ||
      id == "p_area" ||
      id == "p_pincode"
    ) {
      handelNormalError(value, id, errorId);
    } else if (id == "dob") {
      var nDOB = value;
      let userDate = new Date(nDOB).getTime();
      let today = Date.now();
      console.log(userDate);
      console.log(today);
      let getTime = today - userDate;
      // console.log(getTime)
      let difference = new Date(getTime);
      let age = Math.abs(difference.getUTCFullYear() - 1970);
      console.log(age);
      if (userDate > today) {
        printError("dobError", "Your Date is grater than today");
        printError("ageError", "Your age is not matched");
      } else {
        printError("dobError", "");
        printError("ageError", "");
        document.getElementById("age").value = age;
      }
      // else (!age) {
      //       printError("dobError", "Please Select Date Of Birth");
      //     }
      //       } else {
      //         printError("dobError", "");
      //         document.getElementById("age").value = age
      //       }
      //     }
      // let userYear = new Date(nDOB).getFullYear();
      // let thisYear = new Date().getFullYear();
      // var userAge = thisYear - userYear;
      // if (!nDOB) {
      //   printError("dobError", "Please Select Date Of Birth");
      // } else {
      //   if (userDate > today) {
      //     printError("dobError", "Your Date is grater than today");
      //   } else {
      //     printError("dobError", "");
      //   }
      // }
    } else if (value.trim().length < 1) {
      printError(`${errorId}`, `Please Enter ${id}`);
    } else {
      if (id == "fname") {
        var regName = /^[a-zA-Z ]{1,30}$/;
        handleError(value, id, errorId, regName);
      } else if (id == "lname") {
        var regName = /^[a-zA-Z ]{1,30}$/;
        handleError(value, id, errorId, regName);
      } else if (id == "email") {
        var regName = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        handleError(value, id, errorId, regName);
      } else if (id == "mobileNo") {
        var regName = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        handleError(value, id, errorId, regName);
        // } else if (id == "age") {
        //   var regName = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
        //   handleError(value, id, errorId, regName);
      } else if (id == "accountNumber" || id == "c_accountNumber") {
        var regName = /^[0-9]{9,18}$/;
        handleError(value, id, errorId, regName);
        var accNumber = acNumber.value;
        var reAccNumber = r_AcNumber.value;
        console.log(accNumber, reAccNumber);
        if (accNumber === reAccNumber) {
          console.log("Right Account Number");
          printError("conAccNoError", "Account Number Matched", "green");
        } else {
          printError("conAccNoError", "Account Number is not matched");
        }
      } else if (id == "ifscCode") {
        var regName = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        handleError(value, id, errorId, regName);
      }
    }
  }
};

var sum = 0;
var sub = 0;
var mul = 0
var div = 0
var n1 = document.getElementById("number_1");
var n2 = document.getElementById("number_2");
const handleNumbers = (id, errorId) => {
  var value = document.getElementById(id).value;

  if (value.trim().length < 1) {
    printError(`${errorId}`, `Please Enter ${id}`);
  }
  else{
        if (id == "number_1") {
          var regName = /^-?\d*\.?\d+$/;
          handleError(value, id, errorId, regName);
        } else if (id == "number_2") {
          var regex = /^(100|[1-9][0-9]?)$/
          if (!regex.test(value)) {
            printError(`${errorId}`, `Please Enter between 1 to 100`);
          } else {
            printError(`${errorId}`, "");
          }
          
        }
  }
  let number1 = Number(n1.value);
  let number2 = Number(n2.value);
  if (number1 && number2) {
    sum = number1 + number2;
    sub = number1 - number2;
    mul = number1 * number2
    div = number1 / number2
  } else if (number1) {
    sub = number1;
    sum = number1;
    mul = number1
    div = number1
  } else {
    sub = number2;
    sum = number2;
    mul = number2
    div = number2
  }
  document.getElementById("add").value = sum;
  document.getElementById("sub").value = sub;
  document.getElementById("mul").value = mul;
  document.getElementById("div").value = div;
};


// handle error for normal field
const handelNormalError = (value, id, errorId) => {
  if (!value) {
    printError(`${errorId}`, `Please Enter valid ${id}`);
  } else {
    printError(`${errorId}`, "");
    errorId = false;
  }
};

// handle error for regex field
const handleError = (val, id, errorId, regex) => {
  if (!regex.test(val)) {
    printError(`${errorId}`, `Please Enter valid ${id}`);
  } else {
    printError(`${errorId}`, "");
    errorId = false;
  }
};

// remove all fields when user submit a form
const removeFields = () => {
  fields.forEach(function (arr) {
    if (arr.value) {
      console.log(arr);
      arr.value = "";
    } else {
      console.log(arr);
      arr.checked = false;
    }
  });
};

// handle all error's innerHTML and color
const printError = (err, msg, color = "red") => {
  document.getElementById(err).innerHTML = msg;
  document.getElementById(err).style.color = color;
};

// form validation - when user submit form
const formValidation = (e) => {
  let fNameError =
    (lNameError =
    genderError =
    emailError =
    educationError =
    ageError =
    dobError =
    hobbiesError =
    accNoError =
    conAccNoError =
    IFSCError =
    h_noError =
    socNameError =
    landmarkError =
    areaError =
    pincodeError =
    countryError =
    p_h_noError =
    p_soc_nameError =
    p_landmarkError =
    p_areaError =
    p_pincodeError =
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
      conAccNoError = false;
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
  if (!nPincode) {
    printError("pincodeError", "Please Enter pincode");
  } else {
    printError("pincodeError", " ");
    pincodeError = false;
  }

  var nCountry = country.value;
  if (!nCountry) {
    printError("countryError", "Please Select Country");
  } else {
    printError("countryError", "");
    countryError = false;
  }
  // if(isPermanent){
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
  var per_pincode = pn_pincode.value;
  if (!per_pincode) {
    printError("p_pinCodeError", "Please Enter pincode");
  } else {
    printError("p_pinCodeError", " ");
    p_pinCodeError = false;
  }

  var pCountry = p_country.value;
  if (!pCountry) {
    printError("p_countryError", "Please Select Country");
  } else {
    printError("p_countryError", "");
    p_countryError = false;
  }

  var num1 = n1.value;
  if (num1.trim().length < 1) {
    printError("number_1_error", "Please Enter Number 1");
  }
  var num2 = n2.value;
  if (num2.trim().length < 1) {
    printError("number_2_error", "Please Enter Number 2");
  }

  // const formValidation=()=>{
  //   fields.forEach((arr,i) => {
  //     var val = arr.value
  //     console.log(val)
  //     var value = val.value
  //     if (value.length < 1) {
  //       printError(`${errorFields[i]}`, `Please Enter ${arr}`);
  //     }
  //   });

  // check all error if at least one true gives errors otherwise stored data in array
  if (
    (fNameError ||
      lNameError ||
      genderError ||
      emailError ||
      educationError ||
      ageError ||
      dobError ||
      hobbiesError ||
      accNoError ||
      conAccNoError ||
      IFSCError ||
      h_noError ||
      socNameError ||
      landmarkError ||
      areaError ||
      pincodeError ||
      countryError ||
      p_h_noError ||
      p_soc_nameError ||
      p_landmarkError ||
      p_areaError ||
      p_pinCodeError ||
      p_countryError) == true
  ) {
    console.log("Error");
    return false;
  } else {
    console.log("Accept data");
    var obj = {};
    obj.id = Number(id.value);
    obj.fName = firstName;
    obj.lName = lastName;
    obj.fullName = firstName + " " + lastName;
    obj.email = nEmail;
    obj.mobile = Number(nMobileNo);
    obj.age = Number(nAge);
    obj.gender = nGender;
    obj.education = nEducation;
    obj.dob = nDOB;
    obj.hobbies = nHobbies;
    obj.accNo = Number(accNumber);
    obj.ifscCode = IFSCCode;
    obj.address =
      houseNo +
      ", " +
      socName +
      ", " +
      nLandmark +
      ", " +
      nArea +
      "-" +
      nPincode +
      ", " +
      nCountry;
    obj.perAddress =
      prHouNo +
      ", " +
      pSocName +
      ", " +
      pLandmark +
      ", " +
      pArea +
      "-" +
      per_pincode +
      ", " +
      pCountry;
    data.push(obj);
    acceptData(data);
    removeFields();
  }
};

// accept data and create table and display fields
const acceptData = (data) => {
  console.log(data);

  rows.innerHTML = ` <tr>
  <th>Id</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Full Name</th>
  <th>Email</th>
  <th>Mobile No</th>
  <th>Age</th>
  <th>Gender</th>
  <th>Education</th>
  <th>Dob</th>
  <th>Hobbies</th>
  <th>Account Number</th>
  <th>IFSC Code</th>
  <th>Address</th>
  <th>Permanent Address</th>
</tr>`;

  for (let d of data) {
    rows.innerHTML += ` <tr>
           <td>${d.id}</td>
           <td>${d.fName}</td>
           <td>${d.lName}</td>
           <td>${d.fullName}</td>
           <td>${d.email}</td>
           <td>${d.mobile}</td>
           <td>${d.age}</td>
           <td>${d.gender}</td>
           <td>${d.education}</td>
           <td>${d.dob}</td>
           <td>${d.hobbies}</td>
           <td>${d.accNo}</td>
           <td>${d.ifscCode}</td>
           <td>${d.address}</td>
           <td>${d.perAddress}</td>
         </tr>`;
  }
};

// handle auto fetch full_name based on first name and last name
const handelFullName = () => {
  fullName.value = fName.value + " " + lName.value;
};

// handel permanent address when user checked "this is my permanent address" button
const handelAddress = () => {
  const check_address = pr_address.checked;

  if (check_address) {
    if (
      h_no.value &&
      soc_name.value &&
      landmark.value &&
      area.value &&
      pincode.value &&
      country.value
    ) {
      p_h_no.value = h_no.value;
      p_soc_name.value = soc_name.value;
      p_landmark.value = landmark.value;
      p_area.value = area.value;
      p_pincode.value = pincode.value;
      p_country.value = country.value;
      handlePerResetError();
      perFields.forEach(function (arr) {
        document.getElementById(arr.id).disabled = true;
      });
    } else {
      alert("Please enter all fields of address");
      pr_address.checked = false;
    }
  } else {
    p_h_no.value = "";
    p_soc_name.value = "";
    p_landmark.value = "";
    p_area.value = "";
    p_pincode.value = "";
    p_country.value = "";
    perFields.forEach(function (arr) {
      document.getElementById(arr.id).disabled = false;
    });
  }
};

//  handle permanent address error using reset button (when- user checked a 'this address is my permanent address' button )
const handlePerResetError = () => {
  perErrorFields.forEach(function (arr) {
    arr.innerHTML = "";
  });
};

//  handle all fields error using reset button
const resetError = () => {
  errorFields.forEach(function (arr) {
    arr.innerHTML = "";
  });
};
console.log(fields);
