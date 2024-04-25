import { transfer } from '../transfer.entity';
import { transferDto } from '../DTOs/transfer.dto';
export declare class TransferService {
    private transfers;
    findAll(): transfer[];
    findOne(id: number): transfer;
    create(transfer: transferDto): transfer;
    update(id: number, transfer: transferDto): transfer;
    remove(id: number): transfer;
    private generateId;
}
