import { Test, TestingModule } from '@nestjs/testing';
import { FranjaController } from './franja.controller';
import { FranjaService } from './franja.service';

describe('FranjaController', () => {
  let controller: FranjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FranjaController],
      providers: [FranjaService],
    }).compile();

    controller = module.get<FranjaController>(FranjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
