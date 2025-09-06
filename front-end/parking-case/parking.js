const motorRate = 1000;
const carRate = 2000;

function LogVehicle(vehicleData){
    console.log("ID: %s", vehicleData.id);
    console.log("Type: %s", vehicleData.type);
    console.log("Early Tax: %d", vehicleData.tax);
    console.log("Parking Hour: %d", vehicleData.hour);
}

function CalculateTaxes(taxes, hour, isMotor) {
    let taxRate = isMotor ? motorRate : carRate;
    let tempTax = taxRate * hour;

    taxes += tempTax;
    console.log("Total taxes: %d \n", taxes);
}

// <- Motorcycle
console.log("<--------- Motor --------->");

let motorCount = 3;
let motorDatas = [];
for (let index = 0; index < motorCount; index++) {
    let newData = {
        id: Math.floor(Math.random() * 1000),
        type: "Motor", 
        tax: 1000,
        hour: index + 1
    }

    motorDatas.push(newData);
    LogVehicle(newData);
    CalculateTaxes(newData.tax, newData.hour, true);
}

// <- Car
console.log("<--------- Car --------->");

let carCount = 2;
let carDatas = [];
for (let index = 0; index < carCount; index++) {
    let newData = {
        id: Math.floor(Math.random() * 1000),
        type: "Car", 
        tax: 1000,
        hour: index + 1
    }
    
    carDatas.push(newData);
    LogVehicle(newData);
    CalculateTaxes(newData.tax, newData.hour, true);
}