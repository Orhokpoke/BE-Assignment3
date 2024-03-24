const http = require('http')
const PORT = 8900
const authenticate = require('./middleware/authenticate')

function getBodyFromStream(req) {
  return new Promise((resolve, reject) => {
    const data = []
    req.on('data', (chunk) => {
      data.push(chunk)
    })
    req.on('end', () => {
      const body = Buffer.concat(data).toString()
      if (body) {
        resolve(JSON.parse(body))
        return
      }
      resolve({})
    })
    req.on('error', (err) => {
      reject(err)
    })
  })
}

const server = http.createServer(async (req, res) => {
  try {
    const body = await getBodyFromStream(req)
    req.body = body

    if (req.method === 'GET' && req.url === '/books') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from GET /books')
      })
    }
    if (req.method === 'POST' && req.url === '/books') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from POST /books')
      })
    }
    if (req.method === 'PUT' && req.url === '/books') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from PUT /books')
      })
    }
    if (req.method === 'PATCH' && req.url === '/books') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from PATCH /books')
      })
    }
    if (req.method === 'DELETE' && req.url === '/books') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from DELETE /books')
      })
    }
    if (req.method === 'GET' && req.url === '/authors') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from GET /authors')
      })
    }
    if (req.method === 'POST' && req.url === '/authors') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from POST /authors')
      })
    }
    if (req.method === 'PUT' && req.url === '/authors') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from PUT /authors')
      })
    }
    if (req.method === 'PATCH' && req.url === '/authors') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from PATCH /authors')
      })
    }
    if (req.method === 'DELETE' && req.url === '/authors') {
      authenticate(req, res, () => {
        console.log(body)
        res.end('Hello from DELETE /authors')
      })
    }

    // res.end()
  } catch (error) {
    res.statusCode = 500
    res.end(error.message)
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
