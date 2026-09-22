import express from "express";

import {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
} from "../controllers/contactcontroller.js";

const contactRouter = express.Router();

// Submit contact form
contactRouter.post("/", createContact);

// Get all messages
contactRouter.get("/", getContacts);

// Get single message
contactRouter.get("/:id", getContactById);

// Update message status
contactRouter.patch("/:id/status", updateContactStatus);

export default contactRouter;