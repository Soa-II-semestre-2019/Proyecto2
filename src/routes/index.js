const { Router } = require('express');
const router = Router();
const neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '1234'));
var session = driver.session();

router.get('/', (req, res) => res.json({ message: 'compratecapi' }));

router.get('/compratecapi/sucursales', (req, res) => {
    try {
        const resultPromise = session.run(
            'MATCH(n:Sucursal) RETURN n'
        );
        resultPromise.then(function (result) {
            session.close();
            // on application exit:
            driver.close();
            res.json({ result })
        });

    } catch (error) {
        console.log(error);
        res.json({ message: 'fail' })
    }
});

router.get('/compratecapi/productos', (req, res) => {
    try {
        const resultPromise = session.run(
            'MATCH(n:Producto) RETURN n'
        );
        resultPromise.then(function (result) {
            session.close();
            // on application exit:
            driver.close();
            res.json({ result })
        });

    } catch (error) {
        console.log(error);
        res.json({ message: 'fail' })
    }
});

router.get('/compratecapi/servicios', (req, res) => {
    try {
        const resultPromise = session.run(
            'MATCH(n:Servicio) RETURN n'
        );
        resultPromise.then(function (result) {
            session.close();
            // on application exit:
            driver.close();
            res.json({ result })
        });

    } catch (error) {
        console.log(error);
        res.json({ message: 'fail' })
    }
})

router.post('/compratecapi/sucursales', (req, res) => {
    const { id, name } = req.body;
    try {
        const resultPromise = session.run(
            'CREATE (a:Sucursal {id:' + id + ", name:'" + name + "'})"
        );
        resultPromise.then(result => {
            session.close();
            // on application exit:
            driver.close();
            res.json({ message: 'success' })
        });

    } catch (error) {
        console.log(error);
        res.json({ message: 'fail' })
    }
    res.json({ message: 'fail' });
});

module.exports = router;