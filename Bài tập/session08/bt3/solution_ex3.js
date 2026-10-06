const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06']
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE']
const portPowersKw = [250, 150, 60, 250, 60, 150]

portStatuses.splice(portIds.indexOf("S01"),1,"CHARGING");
console.log("Xe cắm sạc vào trụ S01, trạng thái: ", portStatuses[portIds.indexOf("S01")]);

portStatuses.splice(portIds.indexOf("S03"),1,"AVAILABLE");
console.log("Trụ S03 sửa xong, trạng thái: ", portStatuses[portIds.indexOf("S03")]);

let numAvaliable = 0;
portStatuses.forEach((status) => {
    if(status === "AVAILABLE"){
        numAvaliable++;
    }
})
console.log("Tổng số trụ AVAILABLE: ", numAvaliable);

let maxPower = 0;
let maxPowerIndex = 0;
portPowersKw.forEach((power, index) => {
    if(maxPower < power && portStatuses[index] === 'AVAILABLE'){
        maxPower = power;
        maxPowerIndex = index;
    }
});

console.log("Trụ sẵn sàng có công suất lớn nhất (kW): ", portIds[maxPowerIndex]);
