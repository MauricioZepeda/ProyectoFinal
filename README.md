## Proyecto final del curso React.JS - Escalab

El proyecto se encuentra dasarrollado con React y Redux, se conecta a las siguientes API's.
1.- openweathermap
2.- restcountries
3.- back4app - Continentscountriescities
4.- http://ec2-18-191-56-204.us-east-2.compute.amazonaws.com (Api propia para guardar a los usuarios)


## Demo del proyecto en producción

Para ver el proyecto en producción [DEMO](http://proyecto-redux.s3-website-sa-east-1.amazonaws.com/).


## Para instalar debe segir los siguientes pasos

Primero debe clonar el repositorio:
### `git clone https://github.com/MauricioZepeda/ProyectoFinal.git` 

Ingresar al nuevo directorio:
### `cd proyecto-redux` 

Instalar dependencias:
### `npm install` 

Ejecutar en desarrollo:
### `npm start` 
 
Y disfrutar :satisfied:


## BUG'S :disappointed_relieved:
En produccion no despliega el la información del clima ya que no se configuró el https al bucket S3 (por seguridad no da la opcion de preguntar al usuario por la geolocalización)
En desarrollo funciona sin problemas (Segir pasos anteriores para desplegar en desarrollo)
