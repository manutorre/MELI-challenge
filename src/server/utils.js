
export const routeQuerySwitch = (req) => {
    console.log('req.url', req.url)
    console.log('req.params', req.params)
    console.log('req.query', req.query)
    console.log('req.path', req.path)
    console.log('req.base', req.base)
    console.log(req.url, /results\?search=/.test(req.url))

    if (req.path === '/items' || req.path === '/items/' && req.query.search) {
        return '/items?q=' + req.query.search
    }
    if (req.path === '/items/') {
        
    }

    switch (true) {
        case /items\?search=/.test(req.url):
            console.log('/api/items?q=' + req.query.search)
            return '/api/items?q=' + req.query.search
            break;
        case /items/.test(req.url):
            return '/api/item/' + req.params.id
            break;
        default:
            break;
    }
}

const authorCreator = () => {
    return {
        name: 'Manuel',
        lastName: 'Torre'
    }
}

const getItemData = (item) => {
    return {
        id: item.id,
        title: item.title,
        price:{
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimal: ((item.price % 1) + '').split('.')[1] ? ((item.price % 1) + '').split('.')[1] : 0
        },
        picture: item.pictures ? item.pictures[0].url : item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
    }
}

export const formatItem = (item) => {
    try{
        return{
            author: authorCreator(),
            item: {...getItemData(item), ...{sold_quantity: item.sold_quantity, description: item.text ? item.text : item.plain_text}}
        }
    }
    catch(error){
        return error
    }
}

export const formatResults = (response) => {
    try {
        const searchInfo = {
            author:authorCreator()
        };
        let searchResults = [];
        if (response.results && response.results.length > 0) {
            const resultsLengthIndex = response.results.length > 4 ? 4 : response.results.length - 1
            searchResults = response.results.slice(0, resultsLengthIndex).map(item => {
                return getItemData(item)              
            });
        }
        return {...searchInfo, ...{results: searchResults}}
    }
    catch(error){
        return error
    }
}