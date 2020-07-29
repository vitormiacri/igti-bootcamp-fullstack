import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
  return res.json({ ok: true });
});

export default route;
