import { eq } from "drizzle-orm";
import { db } from "../db/pg";
import { users } from "../Schema/user";

// CREATE
export const createUserService = async (name: string, email: string) => {
  const [newUser] = await db.insert(users).values({ name, email }).returning();
  return newUser;
};

// READ ALL
export const getAllUsersService = async () => {
  return await db.select().from(users);
};

// READ ONE
export const getUserByIdService = async (id: number) => {
  const [user] = await db.select().from(users).where(eq(users.id, id));
  return user;
};

// UPDATE
export const updateUserService = async (id: number, name: string, email: string) => {
  const [updatedUser] = await db
    .update(users)
    .set({ name, email })
    .where(eq(users.id, id))
    .returning();
  return updatedUser;
};

// DELETE
export const deleteUserService = async (id: number) => {
  const [deletedUser] = await db.delete(users).where(eq(users.id, id)).returning();
  return deletedUser;
};
