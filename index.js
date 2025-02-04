import express from 'express'

const app = express()
const PORT = 1234 ?? process.env.PORT
const DIR = process.cwd()

app.get('/get', (req, res) => {
  console.log('get')
  res.send('get')
})

app.post('/create', (req, res) => {
  let body = ''
  req.on('data', (chunk) => body += chunk)
  req.on('end', () => body.toString())

  console.log(body)
  res.send('listo, body:', body)
})

// app.use('/', express.static(DIR))
app.listen(PORT, () => `server on port:${PORT}`)
