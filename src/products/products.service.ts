import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { error } from 'console';

@Injectable()
export class ProductsService {
  ProductsList = [
    { id: 1, productName: 'pc1' },
    { id: 2, productName: 'pc2' },

    { id: 3, productName: 'pc3' },

    { id: 4, productName: 'pc4' },
  ];

  getProduct(id: number) {
    const product = this.ProductsList.find(
      (item, index) => item.id === id
    );
    if (product) {
      return product;
    } else {
      throw new Error('not found !!!!');
    }
  }

  deleteProduct(id: number) {
    const myNewProducts = this.ProductsList.filter((item) => item.id !== id);
    console.log('myNewProduct = ', myNewProducts)
    return myNewProducts
  }

  upDateProduct(id: number, updateProductsDto: UpdateProductsDto) {
    //
    const product = this.ProductsList.find((item) => item.id === id);
    const index = this.ProductsList.indexOf(product);
    if (product) {
      
      this.ProductsList[index].id = updateProductsDto.id;
      this.ProductsList[index].productName = updateProductsDto.productName;
    }else{
          throw new Error('not found')
    }

    return updateProductsDto;
  }

  postProduct(createProductsDto: CreateProductsDto) {
     
    this.ProductsList.push(createProductsDto);
    return createProductsDto
  } 
}
