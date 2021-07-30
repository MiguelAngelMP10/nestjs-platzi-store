import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '../common/parse-int.pipe';

import { ProductsService } from './../services/products.service';
@Controller('products') // 👈 Route
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //return `produc limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return { message: `product  ss ${productId}` };

    return this.productsService.findOne(productId);
  }

  @Post() // 👈 New decorator
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };

    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };

    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
