'use strict'

const parser = require('./../../services/parser/parser')

module.exports = [
    {
        method:'GET',
        path:'/parse',
        handler:function (request,h){
            const url = request.query.url;

            return parser.parse(url)
        }
    }
]
