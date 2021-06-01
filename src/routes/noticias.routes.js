import { Router } from "express";
import noticiaCtrl from "../controllers/noticias.controllers";

// crear ruta

const router = Router();

router
  .route("/")
  .get(noticiaCtrl.listarNoticias)
  .post(noticiaCtrl.nuevaNoticia);

router.route("/:id").delete(noticiaCtrl.eliminarNoticia);

export default router;
