import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
export interface OrderCreatedEvent{
    subject: Subjects.OrderCreated;
    data:{
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string //because we are goning to convert Date to json to transfer
        ticket: {
            id: string;
            price: Number;
        }
    }
}