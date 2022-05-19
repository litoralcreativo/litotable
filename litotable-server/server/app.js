const express = require('express')
var cors = require('cors');
const app = express()
const PORT = 3000

app.use(express.json())

app.use(cors({
  origin: '*'
}));

const userRoute = require('./routes/usersRoute.js')
app.use('/api/users', userRoute)
const financiacionesRoute = require('./routes/financiacionesRoute.js')
app.use('/api/financiaciones', financiacionesRoute)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})