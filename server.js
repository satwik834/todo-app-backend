import express from 'express';
import todoRouter from './routes/todoRoutes.js'
const app = express()

const port = 3000

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello fuckers!')
});

app.post('/',(req,res) => {
    res.send('this is a  post reques')
});

app.use('/static', express.static('public'))


app.use('/todo',todoRouter)

app.listen(port,() => {
    console.log('i am listening on port' + port);
})

