import z from "zod";

export const CodegenOptionsSchema = z.object({
  className: z.string(),
  units: z.record(z.tuple([z.string(), z.string()])),
  baseUnit: z.string(),
});

export type CodegenOptions = z.infer<typeof CodegenOptionsSchema>;
