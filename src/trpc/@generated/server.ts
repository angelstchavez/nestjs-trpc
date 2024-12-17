import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  products: t.router({
    create: publicProcedure.input(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      details: z.object({
        description: z.string().optional(),
        rating: z.number().optional(),
      }),
    })).output(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      details: z.object({
        description: z.string().optional(),
        rating: z.number().optional(),
      }),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getById: publicProcedure.input(z.object({ id: z.string() })).output(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      details: z.object({
        description: z.string().optional(),
        rating: z.number().optional(),
      }),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAll: publicProcedure.output(z.array(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      details: z.object({
        description: z.string().optional(),
        rating: z.number().optional(),
      }),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    update: publicProcedure.input(z.object({
      id: z.string(),
      data: z.object({
        id: z.string(),
        name: z.string(),
        price: z.number(),
        details: z.object({
          description: z.string().optional(),
          rating: z.number().optional(),
        }),
      }).partial(),
    })).output(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      details: z.object({
        description: z.string().optional(),
        rating: z.number().optional(),
      }),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    delete: publicProcedure.input(z.object({ id: z.string() })).output(z.boolean()).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

