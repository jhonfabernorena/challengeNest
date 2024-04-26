import { Injectable, NotFoundException } from '@nestjs/common';
import { Transfer } from '../entity/transfer.entity';
import { TransferDto } from '../DTOs/transfer.dto';

@Injectable()
export class TransferService {
  private transfers: Transfer[] = []; // Simulated in-memory database

  findAll(): Transfer[] {
    return this.transfers;
  }

  findOne(id: number): Transfer {
    const transfer = this.transfers.find((t) => t.id === id);
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  create(transfer: TransferDto): Transfer {
    const newTransfer = { id: this.generateId(), ...transfer };
    this.transfers.push(newTransfer);
    return newTransfer;
  }

  update(id: number, transfer: TransferDto): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    this.transfers[index] = { ...this.transfers[index], ...transfer };
    return this.transfers[index];
  }

  remove(id: number): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    const deletedTransfer = this.transfers.splice(index, 1);
    return deletedTransfer[0];
  }

  private generateId(): number {
    return this.transfers.length > 0
      ? Math.max(...this.transfers.map((t) => t.id)) + 1
      : 1;
  }
}
