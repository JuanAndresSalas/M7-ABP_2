import pg from "pg";
import dotenv from "dotenv";

dotenv.config()

const {Pool} = pg

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: 'm7_abp_2',
    password: process.env.DB_PASSWORD
    
})


let nuevoUsuario = ["Carlos Perez"]


pool.query("INSERT INTO usuarios(nombre) VALUES($1) RETURNING *",nuevoUsuario,(err, res, fields)=>{
    if(err){
        throw err
    }else{
        console.table(res.rows)
    }
})