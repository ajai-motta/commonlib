import { Subjects } from "./subjects";
export interface paymentCreatedEvent{
    subject: Subjects.PaymentCreated;
    data:{
        orderId: string;
        id: string;
        paymentId: string; // this is inside orderInfo
    }
}