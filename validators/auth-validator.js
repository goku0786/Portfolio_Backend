const { z } = require('zod');

const loginSchema = z.object({
    email: z
        .string({ require_error: "Email is required" })
        .trim()
        .email({ mesage: "Invalid Email Address" })
        .min(13, { message: "Email must be atleast of 3 characters." })
        .max(25, { message: "Email not more than 25 characters." }),

    password: z
        .string({ require_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be atleast of 8 characters." })
        .max(25, { message: "Password not more than 25 characters" }),

})

// creatuing an object schema
const signupSchema = loginSchema.extend({

    username: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(4, { message: "Name must be atleast of 4 characters." })
        .max(25, { message: "Name not more than 25 characters." }),

    phone: z
        .string({ require_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be atleast of 10 characters." })
        .max(25, { message: "Phone not more than 25 characters" }),

});

module.exports = { signupSchema, loginSchema };