import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { transferDto } from '../DTOs/transfer.dto';
import { transfer } from '../transfer.entity';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService){}

  @Get()
  findAll(): transfer[] {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): transfer {
    return this.transferService.findOne(+id);
  }

  @Post()
  create(@Body() transfer: transferDto): transfer {
    return this.transferService.create(transfer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() transfer: transferDto): transfer {
    return this.transferService.update(+id, transfer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): transfer {
    return this.transferService.remove(+id);
  }
}
