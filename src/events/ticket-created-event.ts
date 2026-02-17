import { Subjects } from "./subjects";
export interface TicketCreatedEvent{
    subject: Subjects.TicketCreated;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;

    }// orderId is not needed because there can't be a order id when we create a ticket
}