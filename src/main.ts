import express, { Application, Request, Response, NextFunction } from 'express'

let app:Application = express()

app.get("/", (req: Request, res: Response, next: NextFunction)=>{

    req.hello = "world"
    console.log(req.hello);
    
    res.send("OK")

})

app.listen(3000, ()=> {

    console.log("listen on 3000");
    
})