
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
            amount: item.price,
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