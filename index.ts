import express from "express";
import { PrismaClient } from "@prisma/client";
import { cause } from './node_modules/effect/dist/esm/internal/core-effect';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        nationality: {
          in: ["Irish", "German", "Portuguese", "Nigerian"],
        },
      },
    });

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.meta.cause);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/users", async (_, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { email: "nike@example.com" },
      data: {
        age: 26,
        isMarried: false,
        email: "mike@example.com"
      },
    });
    res.json(updatedUser);

  } catch (error) {
    console.error("Error editing user:", error.meta.cause);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/users", async (req, res) => {
  const id = req.body?.id;
  if (!id) {
    res.status(400).json({ error: "User ID is required" });
    return;
  }

  try {
    const deletedUsers = await prisma.user.deleteMany({
      where: { age: { gt: id } },
    });
    res.json(deletedUsers);
  } catch (error) {
    console.error("Error deleting user:", error.meta.cause);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
