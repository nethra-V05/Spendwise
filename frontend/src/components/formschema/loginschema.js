import z from "zod";

export const loginschema=z.object({
    name:z.string().min(3,"name must be atleast 3 letters"),
    email:z.string().email("enter valid email"),
    password:z.string().min(8,"password should contains 8 characters"),
    age:z.coerce.number().min(18,"age should be atleast 18 years")
})