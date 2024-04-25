import { TransferService } from '../services/transfer.service';
import { transferDto } from '../DTOs/transfer.dto';
import { transfer } from '../transfer.entity';
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    findAll(): transfer[];
    findOne(id: string): transfer;
    create(transfer: transferDto): transfer;
    update(id: string, transfer: transferDto): transfer;
    remove(id: string): transfer;
}
