import {Router} from 'express';
import noticiaCtrl from '../controllers/noticias.controllers';

// crear ruta

const router = Router();

router.route('/').get(noticiaCtrl.getPrueba).post(noticiaCtrl.nuevaNoticia);

export default router;