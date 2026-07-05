import express from "express";
import { addtoy, removetoys, toylist } from "../controllers/toyController.js";
import multer from "multer";
const router = express.Router()

// multer storage setup
const storage = multer.diskStorage({
  destination: "uploads",

  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// upload middleware
const upload = multer({ storage });

router.post('/add',upload.single('image'),addtoy);
router.get('/lists',toylist)
router.post('/removefromcart',removetoys)



export default router