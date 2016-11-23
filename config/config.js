var development = {
    root: require('path').normalize(__dirname + '/..'),
    port: 2000,
    baseUri: 'http://localhost:2000',

    app: {
        name: 'Application-name'
    },
};

var production = {
    baseUri: 'http://fb.dca.tw',
};


//
//
//


if (process.env.NODE_ENV === 'production') {
    module.exports = merge( development, production);
}else {
    module.exports = development;
}


function merge(obj1,obj2){
    for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
    return obj1;
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
