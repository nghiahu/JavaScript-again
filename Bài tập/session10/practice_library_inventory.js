const library = [
{bookCode: "B001",title: "Lập trình JavaScript cơ bản",category: "Programming",price: 250000,totalCopies: 10,availableCopies: 7,shelfLocation: "A01"},
{bookCode: "B002",title: "JavaScript nâng cao",category: "Programming",price: 320000,totalCopies: 8,availableCopies: 5,shelfLocation: "A02"},
{bookCode: "B003",title: "Clean Code",category: "Software Engineering",price: 450000,totalCopies: 6,availableCopies: 3,shelfLocation: "B01"},
{bookCode: "B004",title: "Đắc Nhân Tâm",category: "Self-help",price: 120000,totalCopies: 15,availableCopies: 10,shelfLocation: "C01"},
{bookCode: "B005",title: "Nhà Giả Kim",category: "Novel",price: 150000,totalCopies: 12,availableCopies: 8,shelfLocation: "C02"}
];

let choice;
do{
    console.log("==============Library Repository==============");
    console.log("1. Nhập kho ấn bản mới");
    console.log("2. Xuất mượn sách");
    console.log("3. Thanh lý sách hỏng");
    console.log("4. Kiểm kê tài sản");
    console.log("0. Thoát");
    choice = prompt("Nhập lựa chọn").trim();
    switch(choice){
        case "1":
            const bookCodeIn = prompt("Nhập mã đầu sách").trim();
            const titleIn = prompt("Nhập tên đầu sách");
            const categoryIn = prompt("danh mục sách");
            let priceIn;
            while (priceIn === undefined || priceIn === "" || Number.isNaN(Number(priceIn)) || Number(priceIn) <= 0) {
                priceIn = prompt("Giá tiền");
            }

            let totalCopiesIn;
            while (totalCopiesIn === undefined || totalCopiesIn === "" || Number.isNaN(Number(totalCopiesIn)) || Number(totalCopiesIn) <= 0) {
                totalCopiesIn = prompt("Tổng số bản");
            }
            const shelfLocationIn = prompt("Vị trí trên kệ");
            const newBook = {
                bookCode:bookCodeIn,
                title:titleIn,
                category:categoryIn,
                price:Number(priceIn),
                totalCopies:Number(totalCopiesIn),
                availableCopies:Number(totalCopiesIn),
                shelfLocation:shelfLocationIn
            }
            library.push(newBook);
            break;
        case "2":
            let isFound = false;
            const findBookCood = prompt("Nhập mã sách");
            for(const book of library){
                if(book.bookCode === findBookCood){
                    if(book.availableCopies <= 0){
                        console.log("HẾT SÁCH TRÊN KỆ");
                        break;
                    }else{
                        book.availableCopies--;
                        isFound = true;
                        break;
                    }
                }
            }
            if(!isFound){
                console.log("Không tìm thấy sách!");
            }
            break;
        case "3":
            let isFound2 = false;
            const findBookCood2 = prompt("Nhập mã sách");
            for(bookIndex in library){
                if(library[bookIndex].bookCode === findBookCood2){
                    library.splice(bookIndex,1);
                    console.log("Đã xóa sách thành công");
                    isFound2 = true;
                    break;
                }
            }
            if(!isFound2){
                console.log("Không tìm thấy sách!");
            }
            break;
        case "4":
            let totalBooks = 0;
            let totalAsset = 0;

            for (const book of library) {
                totalBooks += book.totalCopies;
                totalAsset += book.totalCopies * book.price;
            }

            console.log("======================================");
            console.log("          KIỂM KÊ TÀI SẢN KHO");
            console.log("======================================");
            console.log("Tổng số lượng sách: " + totalBooks);
            console.log("Tổng giá trị tài sản: " + totalAsset + " VNĐ");
            console.log("======================================");

            break;
        case "0":
            console.log("Thoát chương trình!");
            break;
        default:
            console.log('Lựa chọn không hợp lệ vui lòng chọn lại');
    }
}while(choice !== "0");