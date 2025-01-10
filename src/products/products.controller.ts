import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';

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
  getProduct(@Param('id') id:string) {
    
    return this.productService.getProductA(id)
  }

  @Post()
  makeProduct(@Body() createProductsDto: CreateProductsDto){
    console.log('data = ', createProductsDto)
   this.productService.postProductA(createProductsDto)
  }

  @Delete(':id')
  deletProduct(@Param('id') id:string) {
    
    return this.productService.deleteProductA(id)
  }

  @Put(':id')
  upDateProduct(@Param('id') id:string,@Body() upDateProduct: UpdateProductsDto) {
    return this.productService.upDateProductA(id, upDateProduct)
  }
}
