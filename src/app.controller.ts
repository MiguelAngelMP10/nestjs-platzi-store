import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo') // 👈 Without slashes
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/') // 👈 With slashes
  hello() {
    return 'con /sas/';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get('api/:id')
  getProdu(@Param('id') id: string) {
    return;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
}
