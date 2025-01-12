import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';
import { UserAuthGuard } from 'src/user-auth/user-auth.guard';

// type Products = {
//     id: number,
//     productName: string,
// }

// let ProductsList: Products[] = [
//     { id: 1, productName: 'pc1' },
//     { id: 2, productName: 'pc2' },

//     { id: 3, productName: 'pc3' },

//     { id: 4, productName: 'pc4' },

// ]

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

  @Get()
  getProducts() {
    return this.productService.ProductsList;
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id:number) {
    
    return this.productService.getProduct(id)
  }

  @Post()
  makeProduct(@Body(new ValidationPipe()) createProductsDto: CreateProductsDto){
    console.log('data = ', createProductsDto)
   this.productService.postProduct(createProductsDto)
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  deletProduct(@Param('id', ParseIntPipe) id:number) {
    
    return this.productService.deleteProduct(id)
  }

  @Put(':id')
  upDateProduct(@Param('id', ParseIntPipe) id:number,@Body() upDateProduct: UpdateProductsDto) {
    return this.productService.upDateProduct(id, upDateProduct)
  }
}
