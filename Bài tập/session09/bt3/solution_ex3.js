const hontelRooms = [
    {roomId:"P101",roomType:"single",pricePerNight:720000,status:"VACANT"},
    {roomId:"P102",roomType:"double",pricePerNight:1500000,status:"OCCUPIED"},
    {roomId:"P103",roomType:"double",pricePerNight:1500000,status:"MAINTENANCE"}
]

hontelRooms.push({roomId:"P104",roomType:"VIP Suite",pricePerNight:3500000,status:"VACANT"});

for(const room of hontelRooms){
    if(room.roomId === "P101"){
        room.status = "OCCUPIED"
    }
}

let indexDel = -1
for(let i = 0;i < hontelRooms.length;i++){
    if(hontelRooms[i].roomId === "P103"){
        indexDel = i;
        break;
    }
}

if(indexDel !== -1){
    hontelRooms.splice(indexDel,1)
}

console.log(hontelRooms);
