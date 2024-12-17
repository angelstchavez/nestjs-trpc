import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  name: z.string().min(1, { message: 'Name is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  description: z.string().optional(),
  category: z.string().min(1, { message: 'Category is required' }),
  stock: z
    .number()
    .int()
    .nonnegative({ message: 'Stock must be a non-negative integer' }),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Product = z.infer<typeof productSchema>;
