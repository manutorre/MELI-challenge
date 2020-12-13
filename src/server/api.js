import axios from 'axios';
import {formatItem, formatResults} from './utils';

export default function(app){
    //search for items
    app.get('/api/items', async (req, res) => {
        try {
            axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q, {timeout: 5000})
            .then(result => {
                const formattedResults = formatResults(result.data);
                res.send(formattedResults)
            })
        }
        catch(error){
            res.status(500).send({message: 'There was an error while fetching the data'});    
        }
    })

    //single item endpoint. Needs two endpoints to gather all the information. They need to be triggered at the same time and will succeed if both calls succeed
    app.get('/api/items/:id', (req, res) => {
        try{
            axios.all([
                axios.get('https://api.mercadolibre.com/items/' + req.params.id, { timeout: 5000 }),
                axios.get('https://api.mercadolibre.com/items/' + req.params.id + '/description', { timeout: 5000 })
            ])
            .then(result => {
                let formattedResult = formatItem({...result[0].data, ...result[1].data})
                res.send(formattedResult)
            })
        }
        catch(error){
            res.status(500).send({
                message: error.message
            })};
    });    
    
    
    app.get('/api/path_from_root/:category_id/', (req, res) => {
        try{
            axios.get('https://api.mercadolibre.com/categories/' + req.params.category_id, { timeout: 5000 })
            .then(result => {
                res.send(result.data.path_from_root)
            })
        }
        catch(error){ res.status(500).send({
                message: error.message
            });
        }
    });    
}