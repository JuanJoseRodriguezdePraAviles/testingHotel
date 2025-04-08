class Booking {
    constructor(name, email, checkIn, checkOut, discount, room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    get fee() {
        let fee = 0;
        const oneDay = 24 * 60 * 60 * 1000; 
        let totalDays = Math.round(Math.abs((this.checkIn - this.checkOut)/oneDay));
        fee = Number((this.room.rate * totalDays * (this.room.discount/100) * (this.discount/100)).toFixed(2));
        return fee;
    }
}

class Room {
    constructor(name, bookings, rate, discount){
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date) {
        if(typeof(date)!==typeof(new Date())){
            throw new Error("error: type mismatch");
        }
        const bookingsReserved = this.bookings.filter((booking) => date >= booking.checkIn && date <= booking.checkOut);
        if(bookingsReserved.length>0){
            return true;
        }
        return false;
    }

    occupancyPercentage(startDate, endDate) {
        if(typeof(startDate)!==typeof(new Date()) || typeof(endDate)!==typeof(new Date())){
            throw new Error("error: type mismatch");
        }
        if(endDate<startDate){
            throw new Error("error: checkIn date should be before check out date");
        }
        let dateToCheck = new Date(startDate);
        let daysOccupied = 0;
        let daysTotal = 0;
        while(dateToCheck<=endDate) {
            daysTotal++;
            if(this.isOccupied(dateToCheck)){
                daysOccupied++;
            }
            dateToCheck.setDate(dateToCheck.getDate() + 1);
        }
        return Math.round((daysOccupied/daysTotal) * 10000)/100;
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {
        if(!Array.isArray(rooms) || typeof(startDate)!==typeof(new Date()) || typeof(endDate)!==typeof(new Date())){
            throw new Error("error: type mismatch");
        }
        let occupiedRooms = 0;

        let totalRooms = 0;
        rooms.map((room) => {
            totalRooms++;
            if(room.occupancyPercentage(startDate, endDate) > 0) {
                occupiedRooms++;
            }
        });
        return Math.round((occupiedRooms/totalRooms)* 10000)/100; 
    }

    static availableRooms(rooms, startDate, endDate) {
        let resRooms = [];
        if(typeof(rooms)!==typeof([]) || typeof(startDate)!==typeof(new Date()) || typeof(endDate)!==typeof(new Date())){
            throw new Error("error: type mismatch")
        }
        rooms.map((room) => {
            console.log(`Room: ${room.name}, Occupancy: ${room.occupancyPercentage(startDate, endDate)}%`);
            if(room.occupancyPercentage(startDate, endDate) === 0) {
                resRooms.push(room);
            }
        });
        return resRooms;
    }
}

module.exports = { Room, Booking}