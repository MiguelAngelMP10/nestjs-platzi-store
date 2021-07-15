import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products') // 👈 Route
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return { message: `product ${productId}` };
  }

  @Post() // 👈 New decorator
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
