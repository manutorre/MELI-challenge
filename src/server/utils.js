
const authorCreator = () => {
    return {
        name: 'Manuel',
        lastName: 'Torre'
    }
}

const getItemData = (item) => {
    try {
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
            category: item.category_id,
            location: item.address ? item.address.city_name : item.seller_address.city.name
        }
    } catch(error) {
        return error;
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

const mostOccurrences = (categories) => {
    try {
        var map = categories.map(function(a) {
            return categories.filter(function(b) {
                return a === b;
            }).length;
        });
    return categories[map.indexOf(Math.max.apply(null, map))];
    } catch(error){
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
        let breadCrumbCategory = mostOccurrences(categories)
        return {...searchInfo, ...{results: searchResults}, ...{category: breadCrumbCategory}}
    }
    catch(error){
        return error
    }
}