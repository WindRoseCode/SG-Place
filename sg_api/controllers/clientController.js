import {db} from "../db.js"

export const getCliente = (_, res) => {
    const q = "SELECT * FROM cliente";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addCliente = (req, res) => {
    const q = 
    "INSERT INTO cliente(`nome`,`data_nascimento`,`email`,`numero`,`cpfcnpj`,`rzsocial`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.data_nascimento,
        req.body.email,
        req.body.numero,
        req.body.cpfcnpj,
        req.body.rzsocial,
    ];

    db.query(q,[values],(err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!")
    })
}

export const updateCliente = (req, res) =>{
    const q = 
    "UPDATE cliente SET `nome` = ? ,`data_nascimento` = ? ,`email` = ? ,`numero` = ? ,`cpfcnpj` = ? ,`rzsocial` = ? WHERE `id` = ? ";

    const values = [
        req.body.nome,
        req.body.data_nascimento,
        req.body.email,
        req.body.numero,
        req.body.cpfcnpj,
        req.body.rzsocial,
    ];

    db.query(q,[...values, req.params.id],(err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Usuário alterado com sucesso!")
    })

}

export const deleteCliente = (req, res) => {
    const q = "DELETE FROM cliente WHERE `id` = ?";

    db.query(q, [eq.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!")
    })
}