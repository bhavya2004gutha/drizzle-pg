import { users } from "../src/Schema/user";
import { eq }   from "drizzle-orm";
import { Request, Response } from "express";
// import { db } from "../db"; // Adjust the path as needed to where your db instance is exported


export const createUser = async (req: Request, res: Response) => {
   try{
  const   {  name, email} = req.body;
  const result = await  db.insert(users).values ({ name,email}).returning();
  res.status(201).json({ message: "User created successfully", user: result[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const result = await db.select().from(users);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.select().from(users).where(eq(users.id, Number(id)));
    if (result.length === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await db
      .update(users)
      .set({ name, email })
      .where(eq(users.id, Number(id)))
      .returning();

    res.status(200).json({ message: "User updated", user: result[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(users).where(eq(users.id, Number(id)));
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


 