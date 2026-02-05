import * as z from "zod";

export const signUpFormSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full Name must be at least 5 characters.")
    .max(32, "Full Name must be at most 32 characters."),
  address: z
    .string()
    .min(10, "Address must be at least 10 characters.")
    .max(100, "Address must be at most 100 characters."),
  city: z
    .string()
    .min(5, "City must be at least 5 characters.")
    .max(32, "City must be at most 32 characters."),
  postalCode: z
    .string()
    .min(5, "Postal Code must be at least 5 characters.")
    .max(32, "Postal Code must be at most 32 characters."),
  phone: z
    .string()
    .min(12, "Phone must be at least 12 characters.")
    .max(32, "Phone must be at most 32 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character",
    ),
});
