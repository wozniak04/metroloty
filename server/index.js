const express=require('express')
const app=express()
const sql=require('mysql')
const bodyParser=require('body-parser')
const cors=require('cors')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const conn=sql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'metroloty'
})


app.get('/getAktualnosci',(req,res)=>{
    conn.query('SELECT tytul,artykul FROM aktualnosci;',(err,result)=>{
        if(err){
            console.log(err)
            res.send({log:false})
        }else{
            res.send({result})
        }
    })
})

app.get('/getOsoby',(req,res)=>{
    conn.query('SELECT COUNT(*) AS ilosc FROM petycje',(err,result)=>{
        if(err){
            console.log(err)
            res.send({log:false})
        }else{
            res.send({
                ilosc:result[0].ilosc,
                log:true
            })
        }
    })
})


app.post('/czyktospodpisal',(req,res)=>{
    conn.query('SELECT email from petycje WHERE email=?',[req.body.email],(err,result)=>{
        if(err){
            console.log(err)
            res.send({log:false})
        }else{
            if(result.length>0){ 
                res.send({log:false})
            }else{
                res.send({log:true})
            }
        }
    })
})
app.post('/petycje',(req,res)=>{
    conn.query('INSERT INTO petycje (imie,nazwisko,email,wiadomosc) VALUES (?,?,?,?)',[req.body.imie, req.body.nazwisko, req.body.email, req.body.wiadomosc],(err,result)=>{
        if(err){
            console.log(err)
            res.send({log:false})
        }else{
            res.send({log:true})
        }
    })
})


app.listen(5000,()=>{
    console.log('listening on port 5000')
})