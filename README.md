## Proyecto final del curso React.JS - Escalab

El proyecto se encuentra dasarrollado con React y Redux, se conecta a las siguientes API's.<br/>
1.- openweathermap <br/>
2.- restcountries <br/>
3.- back4app - Continentscountriescities <br/>
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
En producción no despliega la información del clima ya que no se configuró el https para comunicarse con el bucket S3 (por seguridad no da la opción de preguntar al usuario por la geolocalización) <br/>
En desarrollo funciona sin problemas (Segir los pasos anteriores para desplegar la solucion en desarrollo)
