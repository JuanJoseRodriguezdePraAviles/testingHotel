const { Booking, Room } = require('./index.js');

it('Should return true', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.isOccupied(new Date("2025-03-25"));
    expect(result).toBe(true);
});

it('Should return false', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.isOccupied(new Date("2025-03-20"));
    expect(result).toBe(false);
});

it('Should return error: type mismatch', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        room.isOccupied(true);
    }).toThrow("error: type mismatch");
});

it('Should return true is date is equal to check in', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.isOccupied(new Date("2025-03-24"));
    expect(result).toBe(true);
});

it('Should return true is date is equal to check out', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.isOccupied(new Date("2025-03-26"));
    expect(result).toBe(true);
});

it('Should return 0%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.occupancyPercentage(new Date("2024-03-20"), new Date("2024-03-22"));
    expect(result).toBe(0);
});

it('Should return 50%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.occupancyPercentage(new Date("2024-03-23"), new Date("2024-03-24"));
    expect(result).toBe(50);
});

it('Should return 100%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const result = room.occupancyPercentage(new Date("2024-03-24"), new Date("2024-03-26"));
    expect(result).toBe(100);
});

it('Should return error: type mismatch if first parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        room.occupancyPercentage(2, new Date("2024-03-26"));
    }).toThrow("error: type mismatch");
});

it('Should return error: type mismatch if second parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        room.occupancyPercentage(new Date("2024-03-26"), 2);
    }).toThrow("error: type mismatch");
});

it('Should return error: checkIn date should be before check out date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        room.occupancyPercentage(new Date("2024-03-26"), new Date("2024-03-24"));
    }).toThrow("error: checkIn date should be before check out date");
});

it('Should return 0%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.totalOccupancyPercentage(rooms, new Date("2024-03-20"), new Date("2024-03-22"));
    expect(result).toBe(0);
});

it('Should return 50%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.totalOccupancyPercentage(rooms, new Date("2024-03-24"), new Date("2024-03-26"));
    expect(result).tobe(50);
});

it('Should return 100%', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.totalOccupancyPercentage(rooms, new Date("2024-03-24"), new Date("2025-03-26"));
    expect(result).toBe(100);
});

it('Should return error: type mismatch if first parameter is not an array', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        Room.totalOccupancyPercentage(true, new Date("2024-03-24"), new Date("2025-03-26"));
    }).toThrow("error: type mismatch");
});

it('Should return error: type mismatch if second parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];
    expect(() => {
        Room.totalOccupancyPercentage(rooms, 3, new Date("2025-03-26"));
    }).toThrow("error: type mismatch");
});

it('Should return error: type mismatch if third parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];

    expect(() => {
        Room.totalOccupancyPercentage(rooms, new Date("2025-03-26"), "Hello world");
    }).toThrow("error: type mismatch");
});

it('Should return error: type mismatch if all parameter are not correct type', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        Room.totalOccupancyPercentage(false, false, false);
    }).toThrow("error: type mismatch");
});

it('Should return an array of rooms of length 0', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0
            }
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.availableRooms(rooms, new Date("2024-03-24"), new Date("2024-03-26"));
    expect(result.length).toBe(0);
});

it('Should return an array of rooms of length 1', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.availableRooms(rooms, new Date("2024-03-20"), new Date("2024-03-22"));
    expect(result.length).toBe(1);
});

it('Should return an error: type mismatch if first parameter is not an array', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        Room.availableRooms(true, new Date("2024-03-20"), new Date("2024-03-22"));
    }).toThrow("error: type mismatch");
    
});

it('Should return an error: type mismatch if second parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];
    expect(() => {
        Room.availableRooms(rooms, "Hello world", new Date("2024-03-22"));
    }).toThrow("error: type mismatch");
});

it('Should return an error: type mismatch if third parameter is not a date', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    const rooms = [room];
    expect(() => {
        Room.availableRooms(rooms, new Date("2024-03-22"), 3);
    }).toThrow("error: type mismatch");
});

it('Should return an error: type mismatch if all parameters are not correct', () => {
    const room = new Room(
        "Room 1",
        [
            {
                name: '',
                email: '',
                checkIn: new Date("2025-03-24"),
                checkOut: new Date("2025-03-26"),
                discount: 0,
                room: new Room()
            },
            {
                name: '',
                email: '',
                checkIn: new Date("2024-03-24"),
                checkOut: new Date("2024-03-26"),
                discount: 0,
                room: new Room()
            }
        ],
        45,
        20
    );

    expect(() => {
        Room.availableRooms(1, 1, 1);
    }).toThrow("error: type mismatch");
});

it('Should return a number', () => {
    const booking = new Booking(
        "Booking 1",
        "example@email.com",
        new Date("2024-03-24"),
        new Date("2024-03-26"),
        20,
        new Room("Room 1", [], 45, 20)
    );

    const result = booking.fee;
    expect(typeof(result)).toBe(typeof(1));
});