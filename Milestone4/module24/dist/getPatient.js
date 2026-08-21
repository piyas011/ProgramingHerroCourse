"use strict";
// Example
// getPatientStatus({ name: "Rahim", age: 35, type: "general" });
// // "General patient"
Object.defineProperty(exports, "__esModule", { value: true });
// getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 });
// // "Critical emergency"
// getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 });
// // "Moderate emergency"
const patient1 = { name: "Rahim", age: 35, type: "general" };
const patient2 = {
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
};
const patient3 = {
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 2,
};
const patient4 = {
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 3,
};
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    else if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Critical emergency";
        }
    }
    return "Moderate emergency";
};
console.log(getPatientStatus(patient1));
console.log(getPatientStatus(patient2));
console.log(getPatientStatus(patient3));
console.log(getPatientStatus(patient4));
//# sourceMappingURL=getPatient.js.map