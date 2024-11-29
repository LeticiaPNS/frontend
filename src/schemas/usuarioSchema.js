import { z } from "zod";

// Regex simples para validar um número de telefone (não perfeito, mas útil para um exemplo)
const phoneRegex = /^\(?(\d{2})\)?\s?(\d{5})-?(\d{4})$/;

export const userSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  fone: z.string()
    .min(1, "Telefone é obrigatório.")
    .regex(phoneRegex, "Número de telefone inválido."), // Validando com regex
  data_nascimento: z.string()
    .min(1, "Data de nascimento é obrigatória.")
    .regex(/\d{4}-\d{2}-\d{2}/, "Formato da data inválido. Exemplo: 2000-12-31"), // Validando formato de data
});
