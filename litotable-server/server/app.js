const express = require('express')
var cors = require('cors');
const app = express()
const PORT = 3000

app.use(cors({
  origin: '*'
}));

const userRoute = require('./routes/usersRoute.js')
app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})