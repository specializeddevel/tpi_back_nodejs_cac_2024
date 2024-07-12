const express = require ("express")
const app = express()
const port = 3030
const cors = require ("cors")
const db = require ("./data/db.js")

const productosRouter = require("./routes/productosRouter.js");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    conexionDb();
    console.log(`Server started successfully at port ${port}`);
})


app.get ("/", (req, res) => {
    res.send("Debes especificar un endpoint para consumir");
});

app.use("/productos", productosRouter);

//conexion a la BD
const conexionDb = async () => {
    try {
        await db.authenticate();
        console.warn("Connected to DB");
        
    } catch (err) {
        console.error(`error al conectar a la DB: ${err}`);
    }
}


//home => homeroutes.js

