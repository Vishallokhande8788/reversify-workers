import { Hono } from "hono";

const app = new Hono();

const reverse = (input) => input.split("").reverse().join("");

app.get("/", (c) => {
  return c.text("Service active");
});

app.post("/", async (c) => {
  const { text } = await c.req.json();

  return c.text(`Reversed: ${reverse(text)}`);
});

export default app;