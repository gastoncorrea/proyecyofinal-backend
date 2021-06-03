import { Router } from "express";
import noticiaCtrl from "../controllers/noticias.controllers";
import usuarioCtrl from '../controllers/usuarios.controllers';


// crear ruta

const router = Router();

router
  .route("/")
  .get(noticiaCtrl.listarNoticias)
  .post(noticiaCtrl.nuevaNoticia);

router
  .route("/:id")
  .delete(noticiaCtrl.eliminarNoticia)
  .put(noticiaCtrl.editarNoticia)
  .get(noticiaCtrl.obtenerNoticia);

router.route("/:id/suscripcion").post(usuarioCtrl.nuevoUsuario)
export default router;
