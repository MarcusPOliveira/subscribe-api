import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod"

const app = fastify()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: true,
})

app.get("/hello", () => {
  return "Hello World!"
})

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333")
})
