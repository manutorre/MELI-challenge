
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
            amount: Math.trunc(item.price),
            decimal: parseInt(((item.price % 1) + '').split('.')[1] ? ((item.price % 1) + '').split('.')[1] : 0)
        },
        picture: item.pictures ? item.pictures[0].url : item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        category: item.category_id
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
        let categories = [];
        if (response.results && response.results.length > 0) {
            const resultsLengthIndex = response.results.length > 4 ? 4 : response.results.length - 1
            searchResults = response.results.slice(0, resultsLengthIndex).map(item => {
                categories.push(item.category_id);
                return getItemData(item)              
            });
        }
        console.log(categories)
        return {...searchInfo, ...{results: searchResults}, ...{categories: categories}}
    }
    catch(error){
        return error
    }
}