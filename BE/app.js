const Koa = require("koa");
const Router = require("@koa/router");
const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const prompt = "Write a story about a magic backpack.";

async function generateText(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);

  console.log(1234, result);
  return result;
}

const app = new Koa();
const router = new Router({ prefix: "/api" });

router.get("/user", async (ctx) => {
  const result = await generateText(prompt);
  ctx.body = {
    status: 200,
    message: "success",
    data: {
      userName: "张三",
      age: 18,
      sex: "男",
      c: result,
    },
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
