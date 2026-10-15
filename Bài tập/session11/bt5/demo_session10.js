const devices = [
    {id:"DEV01", powerWatts:1500 ,isActive:true},
    {id:"DEV02", powerWatts:60 ,isActive:true},
    {id:"DEV03", powerWatts:40 ,isActive:true}
]

function findDeviceById(deviceID){
    for(const device of devices){
        if(device.id === deviceID){
            return device
        }
    }
}

function updateDeviceState(deviceID){
    const device = findDeviceById(deviceID);
    if(device.isActive !== undefined){
        device.isActive = false;
    }
    return device;
}

function updatePowerWatts(deviceID, newPower){
    const device = findDeviceById(deviceID);
    if(device.powerWatts !== undefined){
        device.powerWatts = newPower;
    }
    return device;
}

const calculateActivePower = () =>{
    let totalPower = 0;
    for(const device of devices){
        if (device.isActive === true) {
            totalPower += device.powerWatts;
        }
    }
    return totalPower;
}

console.log("Tắt DEV01: ",updateDeviceState("DEV01"));

console.log("Hạ công suất DEV03 về 0W: ", updatePowerWatts("DEV03",0));

console.log("Tổng công suất hiện tại: ",calculateActivePower());