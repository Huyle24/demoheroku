import express from "express";
import homeCotroller from '../controller/homeCotroller';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeCotroller.getHomepage);
    router.get('/detail/user/:Id', homeCotroller.getDetailPage)
    router.get('/about', (req, res) => {
        res.send(`I'm Eric!`)
    })
 
    return app.use('/', router)
}


export default initWebRoute;