
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/usercontroller"; 

const router = Router();


router.post("/createUser", createUser);

router.get("/getAllUsers", getAllUsers);


router.get("/getUser/:id", getUserById);


router.put("/updateUser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);

export default router;



