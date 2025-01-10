import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
     ProductsList = [
        { id: 1, productName: 'pc1' },
        { id: 2, productName: 'pc2' },
    
        { id: 3, productName: 'pc3' },
    
        { id: 4, productName: 'pc4' },
    
    ]

    getProductA(id: string){
        return this.ProductsList.find((item, index) => item.id === parseInt(id));

    }

    deleteProductA(id: string){
        return this.ProductsList.filter((item) => item.id !== parseInt(id))
    }

    upDateProductA(id: string, updateProductsDto: UpdateProductsDto){
        return updateProductsDto;
        

    }

    postProductA(createProductsDto: CreateProductsDto){
        return this.ProductsList.push(createProductsDto)
    }
}
