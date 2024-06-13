import { z } from "zod";

export const registerAgencySchema = z.object({
    agencyName: z.string().nonempty("O nome da agência é obrigatório"),
    name: z.string().nonempty("O seu nome é obrigatório"),
    phone: z
        .string()
        .regex(
            /^\(\d{2}\) \d{5}-\d{4}$/,
            "Telefone é um campo obrigatório"
        ),
    email: z.string().email("E-mail inválido"),
    observations: z.string().optional(),
});
