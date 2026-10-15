let isExit = false;
const subscriptions = [
    {id:"SUB_001",customerName:"Nguyễn Văn A",servicePlan:"PERSONAL",planPrice:150000},
    {id:"SUB_002",customerName:"Nguyễn Văn B",servicePlan:"FAMILY",planPrice:500000},
    {id:"SUB_003",customerName:"Nguyễn Văn C",servicePlan:"FAMILY",planPrice:500000},
]

function findSubscriptionById(id) {
    for (const subscription of subscriptions) {
        if (subscription.id === id) {
            return subscription;
        }
    }
    return undefined;
}
function generateSubscriptionId() {
    let maxId = 0;
    for (const subscription of subscriptions) {
        const number = Number(subscription.id.slice(4));
        if (number > maxId) {
            maxId = number;
        }
    }
    return "SUB_" + String(maxId + 1).padStart(3, "0");
}
const addSubscription = () =>{
    let customerName = prompt("Nhập tên khách hàng:").trim();
    if (customerName === "") {
        console.log("Tên khách hàng không được để trống");
        return;
    }
    let servicePlan = prompt("Chọn gói PERSONAL hoặc FAMILY:").trim().toUpperCase();
    if (servicePlan !== "PERSONAL" && servicePlan !== "FAMILY") {
        console.log("Gói cước không hợp lệ");
        return;
    }
    if(servicePlan === "PERSONAL"){
        planPrice = 150000;
    }else{
        planPrice = 500000;
    }
    const newSubscription = {
        id: generateSubscriptionId(),
        customerName: customerName,
        servicePlan: servicePlan,
        planPrice: planPrice
    };

    subscriptions.push(newSubscription);

    console.log("Thêm thuê bao thành công:", newSubscription);
}

const listSubscriptions = () =>{
    if (subscriptions.length === 0) {
        console.log("Danh sách thuê bao trống");
        return;
    }
    console.log("========== DANH SÁCH THUÊ BAO ==========");
    for (const subscription of subscriptions) {
        console.log(
            "Mã:", subscription.id,
            "Tên:", subscription.customerName,
            "Gói:", subscription.servicePlan,
            "Giá:", subscription.planPrice,
        );
    }
}

const updateSubscription = () =>{
    const id = prompt("Nhập mã thuê bao cần cập nhật:").trim();
    const subscription = findSubscriptionById(id);
    if (subscription === undefined) {
        console.log("Không tìm thấy thuê bao");
        return;
    }
    const newPlan = prompt("Nhập gói mới PERSONAL hoặc FAMILY:")
        .trim()
        .toUpperCase();

    if (newPlan !== "PERSONAL" && newPlan !== "FAMILY") {
        console.log("Gói cước không hợp lệ");
        return;
    }

    subscription.servicePlan = newPlan;

    if (newPlan === "PERSONAL") {
        subscription.planPrice = 150000;
    } else {
        subscription.planPrice = 500000;
    }
    console.log("Cập nhật thuê bao thành công:", subscription);
}

const deleteSubscription = () =>{
    const id = prompt("Nhập mã thuê bao cần hủy:").trim();
    let index = -1;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].id === id) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.log("Không tìm thấy thuê bao");
        return;
    }
    const deletedSubscription = subscriptions.splice(index, 1);
    console.log("Đã hủy thuê bao:", deletedSubscription[0]);
}

do{
    console.log("================MENU quản trị===============");
    console.log("1. Thêm thuê bao mới");
    console.log("2. Xem toàn bộ danh sách thuê bao");
    console.log("3. Cập nhật gói cước");
    console.log("4. Hủy thuê bao");
    console.log("5. Thoát chương trình");
    const    choice = prompt("Lựa chọn của bạn");
    switch(choice){
        case "1":
            addSubscription();
            break;
        case "2":
            listSubscriptions();
            break;
        case "3":
            updateSubscription();
            break;
        case "4":
            deleteSubscription();
            break;
        case "5":
            isExit = true;
            break;
        default:
            console.log("Lựa chọn không hợp lệ vui lòng chọn lại");
    }
}while(!isExit);