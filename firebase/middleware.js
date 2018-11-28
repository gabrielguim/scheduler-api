import { auth } from "./firebase-init" 

module.exports = async (req, res, next) => {   
    if (req.headers["fir-token"]) {
        const token = req.headers["fir-token"];
        const uid = req.headers["user-uid"];

        auth.verifyIdToken(token, true)
            .then(data => {
                if (data.uid === uid) next();
                console.log(data.uid, uid);
                res.status(401).send({
                    code: "invalid-uid",
                    msg: "Ops. O UID informado não é o mesmo associado ao Token."
                });
            }).catch(err => {
                res.status(401).send({
                    code: "invalid-token",
                    msg: "Ops. Você não tem permissão para essa requisição."
                });
            });

    } else {
        res.status(401).send({
            code: "inexistant-token",
            msg: "Ops. Você não tem permissão para essa requisição."
        });
    }
};

