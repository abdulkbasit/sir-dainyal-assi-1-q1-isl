"use strict";
const age = 18;
const basit = true;
if (age < 18 && !basit) {
    console.log("Sorry, you must be at least 18 years old and not a student to enter this event.");
}
else if (age >= 18 && basit) {
    console.log("Welcome to the event!");
}
else if (age < 18 && basit) {
    console.log("Sorry, you must be at least 18 years old to enter this event.");
}
else {
    console.log("Welcome to the event, student!");
}
