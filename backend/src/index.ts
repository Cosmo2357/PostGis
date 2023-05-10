import dotenv from 'dotenv';
dotenv.config();

import express,  { Application } from 'express';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;


import AllRoutes from "./api/v1/routes";
const {exampleRouter } = AllRoutes;
app.use('/api/v1/example', exampleRouter);


app.listen(port, () => {
  console.log(`Express server running  at http://localhost:${port}`);
});
                                                                          