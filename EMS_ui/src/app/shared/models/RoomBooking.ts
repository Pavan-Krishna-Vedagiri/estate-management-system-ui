export interface RoomBooking {
    bookingId: string;
    propertyId: string;
    roomId: string;
    residentId: string;

    startDate: Date; 
    endDate: Date;

    rentAmount: string;
    status: string;
}
