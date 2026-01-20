import { Subjects } from "./subjects";
//TicketUpdatedEvent in order to not get confuced
export interface TicketUpdatedEvent{
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}