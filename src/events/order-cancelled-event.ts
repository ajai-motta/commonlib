import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
export interface OrdercancelledEvent{
    subject: Subjects.Ordercancelled;
    data:{
        id: string;
        ticket:{
            id: string;
        }
    }
}