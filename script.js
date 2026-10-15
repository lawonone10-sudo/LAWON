//---------------------------------------- Reasuble function ------------------------------------------------------1

const fieldsRequired = document.querySelectorAll(".field-required");

function setupValidation(
  field,
  alertText,
  emptyFieldMessage,
  maxLength,
  messageMaxL,
  minLength,
  messageMinL,
  characterIncluded,
  messageNoSpace,
) {
  let toggle = false;

  // BLUR
  field.addEventListener("blur", () => {
    toggle = true;

    const inputLg = field.value.trim().length;

    if (field.value.trim() === "") {
      alertText.textContent = emptyFieldMessage;
      field.style.border = "2px solid red";
    } else if (inputLg > maxLength) {
      alertText.textContent = messageMaxL;
      field.style.border = "2px solid red";
    } else if (inputLg < minLength) {
      alertText.textContent = messageMinL;
      field.style.border = "2px solid red";
    } else if (field.value.trim().includes(characterIncluded)) {
      alertText.textContent = messageNoSpace;
      field.style.border = "2px solid red";
    } else {
      alertText.textContent = "";
      field.style.border = "2px solid green";
    }

    field.style.outline = "";
  });

  // INPUT
  field.addEventListener("input", () => {
    if (!toggle) return;

    const validateLength = field.value.trim().length;

    if (validateLength >= minLength && validateLength <= maxLength) {
      alertText.textContent = "";
      field.style.border = "2px solid green";
    }

    field.style.outline = "none";
  });
}

function haveInfoYesOrNo(yes, no, container) {
  yes.addEventListener("change", () => {
    container.style.display = "flex";
  });

  no.addEventListener("change", () => {
    container.style.display = "none";
  });
}

// goal: now how reusable the function and how does that work how to code it.

//---------------------------------------- Reasuble function ------------------------------------------------------

//--------------------------------------- second section  ---------------------------------------------------------2 Personal Information

//entire name
const firstName = document.querySelector("#first-name");
const alertFirstName = document.querySelector("#alert-first-name");

setupValidation(
  firstName,
  alertFirstName,
  "Please enter your first name",
  10,
  "First name is too long",
  2,
  "First name is too short",
  " ",
  "First name cannot contain spaces",
);

const middleName = document.querySelector("#middle-name");
const alertMiddleName = document.querySelector("#alert-middle-name");

setupValidation(
  middleName,
  alertMiddleName,
  "Please enter your middle name",
  10,
  "Middle name is too long",
  2,
  "Middle name is too short",
  " ",
  "Middle name cannot contain spaces",
);

const lastName = document.querySelector("#last-name");
const alertLastName = document.querySelector("#alert-last-name");

setupValidation(
  lastName,
  alertLastName,
  "Please enter your last name",
  10,
  "Last name is too long",
  2,
  "Last name is too short",
  " ",
  "Last name cannot contain spaces",
);
//entire name

//date of birth
const dateofBirth = document.querySelector("#date-of-birth");
const alertDateOfBirth = document.querySelector("#alert-date-of-birth");

const maximumDateOfBirth = new Date();
maximumDateOfBirth.setFullYear(maximumDateOfBirth.getFullYear() - 18);

const minimumDateOfBirth = new Date();
minimumDateOfBirth.setFullYear(minimumDateOfBirth.getFullYear() - 80);

let touchDOB = false;

dateofBirth.addEventListener("blur", () => {
  touchDOB = true;
  const objectDateOfBirth = new Date(dateofBirth.value);

  if (maximumDateOfBirth < objectDateOfBirth) {
    alertDateOfBirth.textContent =
      "Your date of birth must be before " + maximumDateOfBirth.toDateString();
    dateofBirth.style.border = "2px solid red";
  } else if (minimumDateOfBirth > objectDateOfBirth) {
    alertDateOfBirth.textContent =
      "Your date of birth must be after " + minimumDateOfBirth.toDateString();
    dateofBirth.style.border = "2px solid red";
  } else {
    alertDateOfBirth.textContent = "";
    dateofBirth.style.border = "2px solid green";
  }

  field.style.outline = "";
});

dateofBirth.addEventListener("input", () => {
  if (!touchDOB) return;

  const dateDOB = new Date(dateofBirth.value);

  if (maximumDateOfBirth > dateDOB && minimumDateOfBirth < dateDOB) {
    alertDateOfBirth.textContent = "";
    dateofBirth.style.border = "2px solid green";
  }

  field.style.outline = "none";
});

//date of birth

// Age
const age = document.querySelector("#age");
const alertAge = document.querySelector("#alert-age");

setupValidation(
  age,
  alertAge,
  "Please enter your age",
  3,
  "Age is too long",
  2,
  "Age is too short",
  " ",
  "Age cannot contain spaces",
);
// Age

//--------------------------------------- second section  ---------------------------------------------------------2 Personal Information

//--------------------------------------- third section  ---------------------------------------------------------3 Contact Information
//phone number
const phoneNumber = document.querySelector("#phone-number");
const alertPhoneNumber = document.querySelector("#alert-phone-number");

let touchPN = false;

setupValidation(
  phoneNumber,
  alertPhoneNumber,
  "Please enter your phone number",
  10,
  "Phone number is too long",
  10,
  "Phone number is too short",
  " ",
  "Phone number cannot contain spaces",
);
//phone number

// Email address
const emailAddress = document.querySelector("#email-address");
const alertTextEA = document.querySelector("#alert-email-address");

let touchEA = false;

emailAddress.addEventListener("blur", () => {
  touchEA = true;

  const EAvalue = emailAddress.value.trim();

  if (EAvalue === "") {
    alertTextEA.textContent = "Please, Enter your email";
    emailAddress.style.border = "2px solid red";
  } else if (EAvalue.includes(" ")) {
    alertTextEA.textContent = "Email addresses cannot contain spaces.";
    emailAddress.style.border = "2px solid red";
  } else if (EAvalue.length < 16) {
    alertTextEA.textContent = "The email is too short";
    emailAddress.style.border = "2px solid red";
  } else if (EAvalue.length > 30) {
    alertTextEA.textContent = "The email is too long";
    emailAddress.style.border = "2px solid red";
  } else if (!EAvalue.includes("@")) {
    alertTextEA.textContent = "The email must include an @";
    emailAddress.style.border = "2px solid red";
  } else {
    alertTextEA.textContent = "";
    emailAddress.style.border = "2px solid green";
  }

  emailAddress.style.outline = "";
});

emailAddress.addEventListener("input", () => {
  if (!touchEA) return false;
  const EAvalue = emailAddress.value.trim();

  if (
    EAvalue.length > 16 &&
    EAvalue.length <= 30 &&
    EAvalue.includes("@") &&
    !EAvalue.includes(" ")
  ) {
    alertEmailAddress.textContent = "";
    emailAddress.style.border = "2px solid green";
  }

  emailAddress.style.outline = "none";
});
// Email address

//home address
const homeAddress = document.querySelector("#home-address");
const alertHomeAddress = document.querySelector("#alert-home-address");

setupValidation(
  homeAddress,
  alertHomeAddress,
  "Please, Enter your Address",
  120,
  "The address is too long",
  5,
  "The address is too short",
  "@",
  "",
);

//home address

//--------------------------------------- third section  ---------------------------------------------------------

//--------------------------------------- fourth section  ---------------------------------------------------------4 Identification

const typesOfID = document.querySelectorAll("input[name='types-of-id']");
const collectID = document.querySelector("#container-id-number");

typesOfID.forEach((id) => {
  id.addEventListener("change", () => {
    collectID.style.display = "flex";
  });
});

const idNumber = document.querySelector("#id-number");
const alertIdNumber = document.querySelector("#alert-id-number");

setupValidation(
  idNumber,
  alertIdNumber,
  "Please, enter your id",
  15,
  "id too large",
  4,
  "id too short",
  "@",
  "",
);

//--------------------------------------- fourth section  ---------------------------------------------------------

//--------------------------------------- fifth section  ---------------------------------------------------------5 Education

const graduateYes = document.querySelector("#graduate-yes");
const graduateNo = document.querySelector("#graduate-no");
const graduationInfo = document.querySelector("#graduation-information");

haveInfoYesOrNo(graduateYes, graduateNo, graduationInfo);

const universityName = document.querySelector("#university-name");
const alertUniversityName = document.querySelector("#alert-university-name");

setupValidation(
  universityName,
  alertUniversityName,
  "Please, enter the name of your college",
  50,
  "Text too large",
  2,
  "Text to short",
  "@$",
  "",
);

const selectKindOfDegree = document.querySelector("#select-kind-of-degree");
const containerOfSpecifyDegree = document.querySelector(
  "#container-of-specify-degree",
);

selectKindOfDegree.addEventListener("change", () => {
  if (selectKindOfDegree.value === "other-kind-of-degree") {
    containerOfSpecifyDegree.classList = "";
  }
  if (selectKindOfDegree.value !== "other-kind-of-degree") {
    containerOfSpecifyDegree.classList = "hidden";
  }
});

const inputOfDegree = document.querySelector("#input-of-degree");
const alertInputOfDegree = document.querySelector("#alert-input-of-degree");

setupValidation(
  inputOfDegree,
  alertInputOfDegree,
  "Please, Enter your degree",
  40,
  "Text too large",
  2,
  "text too short",
  "$@@",
  "",
);

//--------------------------------------- fifth section  ---------------------------------------------------------

//--------------------------------------- sixth section  ---------------------------------------------------------6 Pharmacy License

const pharmacyLicenseYes = document.querySelector("#yes-pharmacy-license");
const pharmacyLicenseNo = document.querySelector("#no-pharmacy-license");
const formOfPharmacyLicense = document.querySelector(
  "#extra-form-pharmacy-license",
);

haveInfoYesOrNo(pharmacyLicenseYes, pharmacyLicenseNo, formOfPharmacyLicense);

const LicenseNumber = document.querySelector("#license-number");
const alertLicenseNumber = document.querySelector("#alert-license-number");

setupValidation(
  LicenseNumber,
  alertLicenseNumber,
  "Please, enter your license number",
  20,
  "the numbers must be less than 20",
  5,
  "numbers too short",
  "dfds3E3DE@@",
  "",
);

const dateExpiration = document.querySelector("#date-expiration");
const alertDateExpiration = document.querySelector("#alert-date-expiration");

let dateExpirationToggle = false;

// Helper function to parse YYYY-MM-DD cleanly as local midnight
function parseLocalDate(dateString) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// Helper function to get today at 00:00:00
function getTodayMidnight() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

dateExpiration.addEventListener("blur", () => {
  dateExpirationToggle = true;

  const instantiationDateExpiration = parseLocalDate(dateExpiration.value);
  const todaysDate = getTodayMidnight();

  if (
    !instantiationDateExpiration ||
    isNaN(instantiationDateExpiration.getTime())
  ) {
    // Handle empty or invalid input
    dateExpiration.style.border = "";
    alertDateExpiration.textContent = "";
    return;
  }

  if (todaysDate >= instantiationDateExpiration) {
    dateExpiration.style.border = "2px solid red";
    alertDateExpiration.textContent = "Your license has already expired";
  } else {
    dateExpiration.style.border = "2px solid green";
    alertDateExpiration.textContent = "";
  }

  dateExpiration.style.outline = "";
});

dateExpiration.addEventListener("input", () => {
  if (!dateExpirationToggle) return;

  const instantiationDateExpiration = parseLocalDate(dateExpiration.value);
  const todaysDate = getTodayMidnight();

  if (instantiationDateExpiration && instantiationDateExpiration > todaysDate) {
    dateExpiration.style.border = "2px solid green";
    alertDateExpiration.textContent = "";
  }

  dateExpiration.style.outline = "none";
});

//--------------------------------------- sixth section  ---------------------------------------------------------

//--------------------------------------- seventh section  ---------------------------------------------------------7 Work Experience

const workExperienceYes = document.querySelector("#yes-work-experience");
const workExperienceNo = document.querySelector("#no-work-experience");
const formOfWorkExperience = document.querySelector("#form-of-work-experience");

haveInfoYesOrNo(workExperienceYes, workExperienceNo, formOfWorkExperience);

const pharmacyName = document.querySelector("#pharmacy-name");
const alertPharmacyName = document.querySelector("#alert-pharmacy-name");

setupValidation(
  pharmacyName,
  alertPharmacyName,
  "Please, fill this field",
  50,
  "text too long",
  1,
  "text too short",
  "38dheaa",
  "",
);

const position = document.querySelector("#position");
const alertPosition = document.querySelector("#alert-position");

setupValidation(
  position,
  alertPosition,
  "Please, fill this field",
  50,
  "text too long",
  1,
  "text too short",
  "38dheaa",
  "",
);

const yearsExperience = document.querySelector("#years-experience");
const alertYearsExperience = document.querySelector("#alert-years-experience");

setupValidation(
  yearsExperience,
  alertYearsExperience,
  "",
  50,
  "",
  0,
  "",
  "38dheaa44",
  "",
);

//--------------------------------------- seventh section  ---------------------------------------------------------

//--------------------------------------- eighth section  ---------------------------------------------------------8 Skills

//--------------------------------------- eighth section  ---------------------------------------------------------

//--------------------------------------- ninth section  ---------------------------------------------------------9 Languages

const otherLanguage = document.querySelector("#other-language");
const inputOfLanguage = document.querySelector("#input-of-language");

otherLanguage.addEventListener("change", () => {
  inputOfLanguage.classList.toggle("hidden", !otherLanguage.checked);
});

const alertInputOfLanguege = document.querySelector("#alert-input-of-languega");

setupValidation(
  inputOfLanguage,
  alertInputOfLanguege,
  "Please, fill this field",
  1000,
  "",
  0,
  "",
  "38dheaa44",
  "",
);

//--------------------------------------- ninth section  ---------------------------------------------------------

//--------------------------------------- tenth section  ---------------------------------------------------------10 Final Review & Submit

const DateofSubmit = document.querySelector("#date-of-submit");
const alertDateofSubmit = document.querySelector("#alert-date-of-submit");

const buttonSubmit = document.querySelector("#button-submit");

buttonSubmit.addEventListener("click", () => {});

//--------------------------------------- tenth section  ---------------------------------------------------------
