"use strict";

const returnArray = {
  NO_STOCK: { title: "Error page", message: "No stock has been found" },
  INCORRECT_DETAILS: {
    title: "Error page",
    message: "Incorrect details have been entered"
  },
  null: { title: "Error page", message: "null" },
  undefined: { title: "Error page", message: "null" },
  success: { title: "Order complete", message: "null" }
};

var errorCodes = [
  { errorcode: "NO_STOCK" },
  { errorcode: "INCORRECT_DETAILS" },
  { errorcode: "null" },
  { errorcode: "undefined" }
];

var stateCodes = [
  { state: "processing" },
  { state: "error" },
  { state: "success" }
];
function sendErrorCodes(data, returnArray) {
  if (data === "NO_STOCK") {
    console.log(returnArray.NO_STOCK);
  } else if (data === "INCORRECT_DETAILS") {
    console.log(returnArray.INCORRECT_DETAILS);
  } else if (data === "undefined" || data) {
    console.log(returnArray.undefined);
  } else {
    console.log(returnArray.undefined);
  }
}
function sleep(time) {
  setTimeout(() => {}, time);
}
function helper(data, returnArray) {
  setTimeout(() => {
    if (data === "processing") {
      console.log("Redirecting To Errorpage ");
      console.log(returnArray.undefined);
    } else if (data === "error") {
      console.log("Displaying Error Message based on Errorcodes");
      errorCodes.map(data => sendErrorCodes(data.errorcode, returnArray));
    } else {
      console.log("Redirecting To Success Page");
      console.log(returnArray.success);
    }
  }, 2000);
}
var getProcessingPage = stateCodes => {
  console.log("processing..");
  stateCodes.map(data => helper(data.state, returnArray));
};

getProcessingPage(stateCodes);
