const buttonSubmit = document.getElementById("btn-search-car");
const driverType = document.getElementById("driver-type");
const bookingDate = document.getElementById("date-booking");
const bookingHours = document.getElementById("hours-booking");
const passengerCount = document.getElementById("passenger-count");

function validInputs() {
    let driverTypeVal = driverType.value;
    let bookingDateVal = bookingDate.value;
    let bookingHoursVal = bookingHours.value;
    let passengerCountVal = passengerCount.value;

    if(driverTypeVal && bookingDateVal && bookingHoursVal) {
        buttonSubmit.removeAttribute("disabled");
    } else {
        buttonSubmit.setAttribute("disabled", true);
    }
}

driverType.addEventListener("input", validInputs);
bookingDate.addEventListener("input", validInputs);
bookingHours.addEventListener("input", validInputs);
passengerCount.addEventListener("input", validInputs);