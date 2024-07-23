import { z } from "zod";

export const kelasInfoValidator = z.array(
  z.object({
    jenjang: z.string(),
    kelas: z.array(z.string()),
  })
);

export const kelasSpesifikValidator = z.array(
  z.array(
    z.object({
      index: z.number(),
      nama: z.string(),
      keterangan: z.string(),
      kelas: z.string(),
      hari: z.number(),
      jam: z.number(),
    })
  )
);
