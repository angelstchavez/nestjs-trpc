import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  products: t.router({
    create: publicProcedure.input(z.object({
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
    })).output(z.object({
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
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getById: publicProcedure.input(z.object({ id: z.string() })).output(z.object({
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
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAll: publicProcedure.output(z.array(z.object({
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
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    update: publicProcedure.input(z.object({
      id: z.string(),
      data: z.object({
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
      }).partial(),
    })).output(z.object({
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
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    delete: publicProcedure.input(z.object({ id: z.string() })).output(z.boolean()).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

