import { Booking, Room } from './index';

it('Should return true', () => {
    const room = new Room(
        "Room 1",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );

    const result = room.isOccupied(new Date("2025-03-20"));
    expect(result).toBe(false);
});

it('Should return true is date is equal to check in', () => {
    const room = new Room(
        "Room 1",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );

    const result = room.occupancyPercentage(new Date("2024-03-24"), new Date("2024-03-26"));
    expect(result).toBe(100);
});

it('Should return error: checkIn date should be before check out date', () => {
    const room = new Room(
        "Room 1",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );
    const room2 = new Room(
        "Room 2",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );

    const rooms = [room, room2];

    const result = Room.totalOccupancyPercentage(rooms, new Date("2024-03-23"), new Date("2024-03-25"));
    expect(result).toBe(50);
});

it('Should return 100%', () => {
    const room = new Room(
        "Room 1",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.totalOccupancyPercentage(rooms, new Date("2024-03-24"), new Date("2025-03-26"));
    expect(result).toBe(100);
});

it('Should return an array of rooms of length 0', () => {
    const room = new Room(
        "Room 1",
        [
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
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
            new Booking(
                '',
                '',
                new Date("2025-03-24"),
                new Date("2025-03-26"),
                0,
                new Room("", [], 0, 0)
            ),
            new Booking(
                '',
                '',
                new Date("2024-03-24"),
                new Date("2024-03-26"),
                0,
                new Room("", [], 0, 0)
            )
        ],
        45,
        20
    );

    const rooms = [room];

    const result = Room.availableRooms(rooms, new Date("2024-03-20"), new Date("2024-03-22"));
    expect(result.length).toBe(1);
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