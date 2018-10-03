import { auth } from "../firebase/firebase-init" 

module.exports = (req, res, next) => {   
    if (req.headers["fir-token"]) {
        const token = req.headers["fir-token"];
        const uid = req.headers["user-uid"];

        auth.verifyIdToken(token, true)
            .then(data => {
                next();
            }).catch(_ => {
                res.status(401).send("Ops. Você não tem permissão para essa requisição.");
            });

    } else {
        res.status(401).send("Ops. Você não tem permissão para essa requisição.");
    }
};

