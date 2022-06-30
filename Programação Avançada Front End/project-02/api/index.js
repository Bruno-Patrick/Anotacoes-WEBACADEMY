const http = require('http')
const URL = require('url')
const data = require('./urls.json')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    
    const { name, url, del } = URL.parse(req.url, true).query
    
    

    data.urls = data.urls.filter(item => item.url != url)

    function writeFile(cb){
        
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err;
                cb('Operação realizada com sucesso!')
            }
        )
    }

    if(!name || !url) return res.end('show') //push(name, url)
    
    if(del) return writeFile(message => res.end(message))

    json = {
        name:name,
        url:url
    }

    data.urls.push(json)


    return writeFile(message => res.end(message))
}).listen(3000, () => {
    console.log('API is running')
})