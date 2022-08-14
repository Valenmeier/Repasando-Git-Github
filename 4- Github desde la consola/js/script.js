//Todo -->Inicializando un repositorio
//* Una de las grandes ventajas que tiene github, es que nos va a permitir trabajar de diferentes formas, tanto desde la nube como de manera local
//? Abrimos la consola
//* Abrimos la carpeta donde se va a encontrar nuestro repositorio, entramos a la carpeta desde la terminal
//* Escribimos cd y arrastramos la carpeta, presionamos enter

//! Para inicializar el repositorio de git
//? llamo al comando --> git init
//* Eso va a inicializar el repositorio dentro de la carpeta
//* Automaticamente se crea una carpeta llamada .git en donde se llevará el control de versiones del repositorio, una vez creado el repositorio, todas las carpetas van a quedar almacenadas dentro de git

//Todo --> examinando el estado del repositorio
//* Git nos permite conocer cual es el estado actual de nuestro repositorio, podemos saber si todas las versiones de nuestro dispositivo estan correctamente almacenadas
//? Git status --> nos permite saber cual es el estado actual de nuestro repositorio

//Todo --> agregando archivos y guardando versiones en Github
//* Utilizamos git status, para ver el estado
//* para agregar utilizamos el comando git add
//? git add --> agrega archivos
//? git add *.html --> agrega todos los archivos html
//? git add . --> agrega todos los archivos
//? git add archivo --> guarda un solo archivo
//* Ponemos git status denuevo y veremos todos los archivos que estan listos para ser agregados

//? git commit -m "mensaje"--> agrega datos dentro del repositorio de manera permanente
//* si modificamos y ponemos git status, nos aparecerá como si hubiesemos modificado un archivo

//Todo --> eliminar archivos de github
//* Cada que eliminemos un archivo, debemos hacerle commit para que se guarde la configuración

//Todo --> enviar repositorio a github  
//* Probando subida
//* Primero debemos hacer commit
//* Luego debemos vincular al github utilizando git remote add origin link del repositorio
//* luego debemos cambiar el nombre de la rama a main con
//?  git branch -M main
//* Por ultimo hacemos push con el comando git push -u origin main --> para mandar el push al main
//*Probando