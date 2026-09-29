const rawTicketCode = "   med-card-0428-ut   ";

const stanRawTicketCode = rawTicketCode.toUpperCase().trim();

const isValidPrefix = stanRawTicketCode.startsWith("MED-");
const departmentCode = stanRawTicketCode.slice(4, 7);
const isPriority = stanRawTicketCode.includes("-UT");
const displayCode = stanRawTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Chuỗi in phiếu:", displayCode);

