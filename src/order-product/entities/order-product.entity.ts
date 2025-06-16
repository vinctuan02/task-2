import { BaseEntity } from "src/database/dto/database.dto";
import { Entity } from "typeorm";

@Entity({ name: 'order_product' })
export class OrderProductEntity extends BaseEntity {
    orderId: string;

}