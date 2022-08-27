const login=require('./routes/login')
const account=require('./routes/account')
const app=express()
const port=5000

app.use(express.json())
app.use('/account',account)
app.use('/login',login)

app.listen(port,()=>{
    console.log(`example at listing port ${port}`)
})