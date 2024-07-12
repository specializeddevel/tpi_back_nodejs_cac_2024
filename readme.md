# TRABAJO PRACTICO INTEGRADOR CURSO BACKEND JAVASCRIPT

## API BÁSICA PARA CRUD DE PRODUCTOS

## INTRODUCCIÓN

Este es el trabajo práctico integrador final del curso de Backend con NodeJS, ofrecido por Codo a Codo y la Agencia de Habilidades para el Futuro de Buenos Aires. Se ha desarrollado una API básica que realiza operaciones CRUD en una tabla de productos a través de llamadas específicas a un endpoint.

**Agradecemos la gran calidad de enseñanza y dedicación de nuestro profesor Gabriel Muñoz.**

## INTEGRANTES DEL EQUIPO

    * Burgos Murray Raul
    * Labruna Axel

## INSTRUCCIONES PARA PONER EN MARCHA EL PROYECTO

### REQUERIMIENTOS PREVIOS

- Debe tener instalada la version 20.15.0 de NodeJS o una version superior
- Debe tener disponible el puerto 3030
- Debe tener acceso a Internet
- Debe contar con un cliente como Thunder Client o Postman para poder efectuar las solicitudes a la API

### INICIAR EL PROYECTO

Si se cumplen los requerimientos, siga estos pasos para poner en marcha el proyecto

1.  Clone el repositorio desde este repositorio con Git dentro de una carpeta en su computadora

    -`git clone https://github.com/specializeddevel/tpi_back_nodejs_cac_2024.git`

2.  Ingrese a la carpeta donde clono el proyecto:

    -`cd tpi_back_nodejs_cac_2024`

3.  Actualice las dependencias del proyecto ejecutando:

    -`npm i`

4.  Ejecute el proyecto:

    -`npm run dev`

    **NOTA: La base de datos del proyecto está alojada en un servidor en la nube, por lo que no es necesario realizar ninguna configuración adicional. Una vez que el proyecto Node.js esté configurado, se conectará automáticamente a la base de datos.**

5.  Una vez iniciado el proyecto, podrá consumir los endpoints con el cliente de su preferencia, de la siguiente manera:

    #### Traer todos los productos registrados:

        Método: GET
        URL: http://localhost:3030/productos/

    #### Traer un producto especifico por su ID:

        Método: GET
        URL:    http://localhost:3030/productos/{id producto}

    #### Registrar un producto nuevo:

        Método: POST
        URL:    http://localhost:3030/productos/

        BODY JSON DE EJEMPLO:
            {
                "nombre": "Producto X",
                "descripcion": "Descripción del producto XX",
                "foto": "https://fotos.com/fotodeproductoX.jpg",
                "precio": 500.5,
                "cantidad_disponible": 20,
                "sku": "prod-000X"
            }

    #### Actualizar un producto:

        Método: PUT
        URL:    http://localhost:3030/productos/{id producto}

        BODY JSON DE EJEMPLO:
            {
                "nombre": "Producto X modificado",
                "descripcion": "Descripción del producto X modificada",
                "foto": "https://fotos.com/fotodeproductoXmodificada.jpg",
                "precio": 999.5,
                "cantidad_disponible": 10,
                "sku": "prod-000XM"
            }

    #### Eliminar un producto especifico por su ID:

        Método: DELETE
        URL:    http://localhost:3030/productos/{id producto}
