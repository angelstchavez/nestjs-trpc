import { Injectable } from '@nestjs/common';
import { Product } from './product.schema';
import { TRPCError } from '@trpc/server';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(productData: Product) {
    this.products.push(productData);
    return productData;
  }

  getById(id: string) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new TRPCError({
        message: 'Product not found',
        code: 'NOT_FOUND',
      });
    }
    return product;
  }

  getAll() {
    return this.products;
  }

  update(id: string, data: Partial<Product>) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new TRPCError({
        message: 'Product not found',
        code: 'NOT_FOUND',
      });
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...data,
    };
    return this.products[productIndex];
  }

  delete(id: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      return false;
    }
    this.products.splice(productIndex, 1);
    return true;
  }
}
