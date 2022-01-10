import express from "express";
import { DomIndex, ModalIndex } from "../controllers/domCon.js";

export const domRt = express.Router();
    domRt.get("/dom", DomIndex);
    domRt.get("/modal", ModalIndex);

    


