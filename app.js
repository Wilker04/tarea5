import fetch from "node-fetch";
import axios from "axios";
import { response } from "express";
import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("el server ha iniciado");
});

let post = {
    nombre: "Wilker",
    apellido: "Jimenez",
    telefono: "8294695485"
}

app.post("/post", (request,response)=>{

axios.post("http://www.raydelto.org/agenda.php", post).then(res=>{
    console.log("contacto registrado");
})

response.send(post);

});


app.get("/get", (request, response)=>{
    fetch("http://www.raydelto.org/agenda.php").then((res)=>{
        return res.json();
    }).then((json)=>{
        response.send(json);
    });
})