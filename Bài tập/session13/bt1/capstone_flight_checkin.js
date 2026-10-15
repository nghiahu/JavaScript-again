const tickets = [
    { ticketId: "T001", pnr: "ABC123", passengerName: "Nguyen Van An", flightCode: "VN201", seat: "12A", ticketClass: "ECONOMY", baggageWeight: 25, status: "BOOKED"},
    { ticketId: "T002", pnr: "DEF456", passengerName: "Tran Thi Binh", flightCode: "VN305", seat: "2B", ticketClass: "BUSINESS", baggageWeight: 20, status: "BOOKED"},
    { ticketId: "T003", pnr: "GHI789", passengerName: "Le Van Cuong", flightCode: "VN201", seat: "18C", ticketClass: "ECONOMY", baggageWeight: 15, status: "BOOKED"}
];

let isExit = false;

function findTicketByPnr(prnFind){
    for(const ticket of tickets){
        if(ticket.pnr === prnFind){
            return ticket;
        }
    }
    return undefined;
}

function findTicketByName(passengerNameFind){
    for(const ticket of tickets){
        if(ticket.passengerName === passengerNameFind){
            return ticket;
        }
    }
    return undefined;
}

function calculateExcessBaggageFee(baggageWeight,ticketClass){
    let weightCalculated = 0;
    if(ticketClass === "ECONOMY"){
        weightCalculated = baggageWeight - 20;
    }else if(ticketClass === "BUSINESS"){
        weightCalculated = baggageWeight - 30;
    }else{
        console.log("Hạng vé không hợp lệ")
        return
    }
    if (weightCalculated < 0) weightCalculated = 0;
    console.log(`Quá cân: ${weightCalculated} kg`);
    console.log(`Phụ phí: ${weightCalculated * 50000} VND`);
    return weightCalculated * 50000;
}

function displayBoardingPass(ticket) {
    console.log("===== BOARDING PASS =====");
    console.log("Mã đặt chỗ: " + ticket.pnr);
    console.log("Hành khách: " + ticket.passengerName);
    console.log("Chuyến bay: " + ticket.flightCode);
    console.log("Số ghế: " + ticket.seat);
    console.log("Hạng vé: " + ticket.ticketClass);
    console.log("Trạng thái: " + ticket.status);
    console.log("=========================");
}

const displayTickets = () => {
    console.log("======================== Danh sách vé ========================");
    for(const ticket of tickets){
        console.log(`Mã vé: ${ticket.ticketId}
            | Mã đặt chỗ: ${ticket.pnr}
            | Tên khách hàng: ${ticket.passengerName}
            | Chuyến bay: ${ticket.flightCode}
            | Số ghế: ${ticket.seat}
            | Hạng vé: ${ticket.ticketClass}
            | Cân hành lý: ${ticket.baggageWeight}
            | Trạng thái: ${ticket.status}`);
    }
}

const checkIn = (prnTicket) => {
    console.log("========Tiếp nhận khách check-in========");
    const ticket = findTicketByPnr(prnTicket);
    console.log(`Cân hành lý: ${ticket.baggageWeight} kg`);
    calculateExcessBaggageFee(ticket.baggageWeight,ticket.ticketClass);
    ticket.status = "CHECKED_IN";
    displayBoardingPass(ticket);
}

const findBoardByPrnName = (findBoard) => {
    if(findTicketByPnr(findBoard) !== undefined){
        return findTicketByPnr(findBoard)
    }else if(findTicketByName(findBoard) !== undefined){
        return findTicketByName(findBoard);
    }else{
        return undefined
    }
}

const cancelTicket = (prn) => {
    const ticket = findTicketByPnr(prn);
    if(ticket !== undefined){
        ticket.status = "CANCELLED";
        console.log("Hủy vé thành công");
        displayBoardingPass(ticket);
        return
    }
    return
}

do{
    console.log("=============== Menu Quản lý ===============");
    console.log("1. Danh sách vé chuyến bay.");
    console.log("2. Tiếp nhận check-in, cân hành lý và tính phụ thu.");
    console.log("3. Tra cứu vé theo mã PNR hoặc tên khách hàng.");
    console.log("4. Hủy vé / Đổi trạng thái vé.");
    console.log("5. Thoát chương trình");
    const choice = prompt("Lựa chọn của bạn: ");
    switch(choice){
        case "1":
            displayTickets();
            break;
        case "2":
            const prnFind = prompt("Nhập mã đặt chỗ để check-in");
            checkIn(prnFind);
            break;
        case "3":
            const findBoard = prompt("Nhập mã đặt vé(prn) hoặc tên hành khách");
            findBoard.trim().toLocaleUpperCase();
            const ticket = findBoardByPrnName(findBoard);
            if(ticket !== undefined){
                displayBoardingPass(ticket);
            }else{
                console.log("Không tìm thấy vé");
            }
            break;
        case "4":
            const prnTicket = prompt("Nhập vã đặt vẽ để hủy vé");
            cancelTicket(prnTicket);
            break;
        case "5":
            isExit = true;
            break;
        default:
            console.log("Lựa chọn không hợp lệ vui lòng chọn lại!");
            break;
    }
}while(!isExit);