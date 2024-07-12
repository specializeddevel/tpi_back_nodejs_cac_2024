# API BÁSICA PARA CRUD DE PRODUCTOS EN UN E-COMMERCE

## INTRODUCCIÓN

Este es el trabajo práctico integrador final del curso de Backend con NodeJS, ofrecido por Codo a Codo y la Agencia de Habilidades para el Futuro de Buenos Aires. Se ha desarrollado una API básica que realiza operaciones CRUD en una tabla de productos a través de llamadas específicas a un endpoint.

## COMO PONER EN MARCHA EL PROYECTO?

### REQUERIMIENTOS PREVIOS

- Debe tener instalada la version 20.15.0 de NodeJS o una version superior
- Debe tener disponible el puerto 3030
- Debe tener acceso a Internet
- Debe contar con un cliente como Thunder Client o Postman para poder efectuar las solicitudes a la API

### INICIAR EL PROYECTO

Si se cumplen los requerimientos, siga estos pasos para poner en marcha el proyecto

1. Clone el repositorio desde este repositorio con Git dentro de una carpeta en su computadora

`git clone https://github.com/specializeddevel/tpi_back_nodejs_cac_2024.git`

2. Ingrese a la carpeta donde clono el proyecto:

   -`cd tpi_back_nodejs_cac_2024`

3. Actualice las depencencias del proyecto ejecutando:

   -`npm i`

**NOTA. La Base de Datos del proyecto se encuentra alojada en un servidor en la nube, por lo que no es necesario realizar ninguna configuracion sobre la misma, una vez que se configure el proyecto Node este se conectara automaticamente a la BD.**

4.  Ejecute el proyecto:

    -`npm run dev`

5.  Una vez iniciado el proyecto, podra consumir los endpoints de la siguiente manera:

    #### Traer todos los productos registrados:

        Metodo: GET
        URL: `http://localhost:3030/productos/`

    #### Traer un producto especifico por su ID:

        Metodo: GET
        URL: `http://localhost:3030/productos/{id producto}`

    #### Actualizar un producto:

        Metodo: POST
        URL: `http://localhost:3030/productos/`
        BODY JSON:
        ```{
                "nombre": "Producto X",
                "descripcion": "Descripcion del producto XX",
                "foto": "https://fotos.com/fotodeproductoX.jpg",
                "precio": 500.5,
                "cantidad_disponible": 20,
                "sku": "prod-000X"
            }```
