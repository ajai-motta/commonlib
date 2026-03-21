import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
export interface OrderUpdatedEvent{
    subject: Subjects.OrderUpdated;
    data:{
        id: string;
        status: OrderStatus
        version: number;
    }
}