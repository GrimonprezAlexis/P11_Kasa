const cors = require('cors');
//https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json
const data = require('../../data/data.json');

module.exports = (router) => {

    router.get('/customers', cors(), (req, res) => {
        const customers = [
            { id: 1, firstName: 'Alexis', lastName: 'Grz' },
            { id: 2, firstName: 'John', lastName: 'Doe' },
            { id: 3, firstName: 'Steve', lastName: 'Smith' }
        ];

        res.json(customers);
    });
    //http://localhost:5000/api/logements
    router.get('/logements', cors(), (req, res) => {
        res.send(data);
    });
    //http://localhost:5000/api/logements/c67ab8a7
    router.get('/logements/:id', cors(), (req, res, next) => {
        let logement = data.find((logement) => { 
            return logement.id == req.params.id;
        });
        res.status(200).send(logement);        
    });
    return router;
}