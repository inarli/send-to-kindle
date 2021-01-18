'use strict'

const mercuryParser = require('@postlight/mercury-parser')

class ContentParser{

    static parse(url){

        return mercuryParser.parse(url)
    }

}


module.exports = ContentParser
