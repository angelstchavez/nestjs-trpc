import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { ProductsService } from './products.service';
import { Product, productSchema } from './product.schema';
import { z } from 'zod';

@Router({ alias: 'products' })
export class ProductsRouter {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation({
    input: productSchema,
    output: productSchema,
  })
  create(@Input() product: Product) {
    return this.productsService.create(product);
  }

  @Query({ input: z.object({ id: z.string() }), output: productSchema })
  getById(@Input('id') id: string) {
    return this.productsService.getById(id);
  }

  @Query({
    output: z.array(productSchema),
  })
  getAll() {
    return this.productsService.getAll();
  }

  @Mutation({
    input: z.object({
      id: z.string(),
      data: productSchema.partial(),
    }),
    output: productSchema,
  })
  update(@Input('id') id: string, @Input('data') data: Partial<Product>) {
    return this.productsService.update(id, data);
  }

  @Query({ input: z.object({ id: z.string() }), output: z.boolean() })
  delete(@Input('id') id: string) {
    return this.productsService.delete(id);
  }
}
