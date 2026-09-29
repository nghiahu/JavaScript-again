const rawTicketCode = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const codeCut = rawTicketCode.split("-");

const rawDoctorName = codeCut[0].slice(3).split("_");
let doctorName = ""
for(let i = 0; i < rawDoctorName.length; i++){
    const contexName = rawDoctorName[i].slice(0,1).toUpperCase() + rawDoctorName[i].slice(1);
    doctorName = doctorName + " " + contexName
}
doctorName = doctorName.trim();

const rawDepartment = codeCut[1].toLowerCase().split("_");
let department = ""
for(let i = 0; i < rawDepartment.length; i++){
    const contexDep = rawDepartment[i].slice(0,1).toUpperCase() + rawDepartment[i].slice(1);
    department = department + " " + contexDep
}
department = department.trim();
const time = codeCut[2]
const room = codeCut[3].replace("PHONG","Phòng").replace("_", " ");

console.log("===========Thông báo phân ca=============");
console.log(`Bác sĩ: ${doctorName}`);
console.log(`Khoa: ${department}`);
console.log(`Thời gian: ${time}`);
console.log(`Phòng khám: ${room}`)