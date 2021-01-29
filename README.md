# Goodservice

#El proyecto contiene funciones de procedimientos almacendados que no se han subido al repositorio y son indispensables para el funcionamiento de la aplicacion.

Caso número 3 portafolio de título

En el backend en settings.py, en la sección Databases, deben cambiar el name a su localhost con el puerto en que esté conectado el sql developer.

En python para crear un superuser deben estar a la misma altura en consola que el archivo manage.py y ejecutar el siguiente comando.

python3 manage.py createsuperuser

completar los datos correspondientes de que serán solicitados en consola.

Luego

python3 manage.py makemigrations  para que se realicen los cambios hechos en la bd.
python3 manage.py migrate para que se migren los cambios
python3 manage.py runserver para correr el servidor

Con eso debería bastar ingresan al IP que les genera el servidor y al final le ponen /admin y podran loguearse con el super user que crearon.
