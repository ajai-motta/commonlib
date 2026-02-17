import { Subjects } from "./subjects";
//TicketUpdatedEvent in order to not get confuced
export interface TicketUpdatedEvent{
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        orderId?: string;
    };
}