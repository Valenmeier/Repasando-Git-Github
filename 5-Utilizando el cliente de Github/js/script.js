//Todo --> Instalación del cliente grafico de Github
//* Github es un servicio increiblemente flexible que se adapta a nuestras necesidades, podemos modificar los archivos de muchas formas de acuerdo a las necesidades que tenemos en el momento, ej: si necesitas modificar un contenido de manera rápida, puedes entrar a la página de Github y modificar los contenidos en cualquier parte del archivo. Puedes trabajar con la consola desde cualquier entorno, si quieres trabajar con un cliente grafico podemos usar el cliente de escritorio de github

//? El cliente grafico tiene distintas opciones, la de clonar un repositorio, la de crear un repositorio dentro de mi equipo y la de subir un repositorio

//* Debemos clonar un repositorio, abrirlo con el navegador y cambiar y guardar, luego de eso le damos arriba a push
//* para sacarlo simplemente le damos click derecho y remove

//Todo --> Crear repositorios locales en GIT
//* File new repository
//* Creando un nuevo repositorio va a ser como si estuviera utilizando Git, se va a guardar todo de manera local, para enviarlo a github tenemos que poner publish repository y se publica automaticamente


//Todo --> sincronizando repositorios en Github
//* Para sincronizar los cambios del repositorio que se encuentra online debemos hacer Fetch y pull origin aa probando

//Todo --> crear y fusionar branch
//* Un branch nos va a permitir crear crear una version ligeramente distinta a nuestro código, verificar los cambios y unir dos versiones, con el cliente de github es fácil crearlo.
//* Para unir ambas ramas se debe hacer un merge, el merge se debe hacer siempre sobre el main --> esto quiere decir que ambos se van a comparar y van a unir, la primera con la segunda rama
//? Una vez terminada la unión de amboes, es mejor que eliminemos el branch, porque existe la posibilidad que se arme una gran cantidad de branches y ya se vuelvan inmanejables
//? Para eliminarlo desde el cliente, buscamos la opción branch, delete y ponemos delete, si presionamos el boton tambien se va a remover hasta en github

//Todo --> solucionar conflicto en GitHub
//* A veces vamos a tener problemas para fusionar los cambios realizados, si tenemos muchos desarrolladores trabajando en areas similares, es posible que tengamos conflictos de versiones
//? LO IDEAL SERIA QUE SIEMPRE SE HAGA UN FETCH
//* Al mandarlo nos va a aparecer un mensaje en donde nos va a pedir hacer un fetch (Unión entre ambas versiones), aveces con colocar en fetch se soluciona
//* Pero, en caso de no solucionarse nos aparecerá una ventana en donde nos pondrá que tenemos conflicto, para solucionarlo nos da diversas opciones, usar la version local y perder la remota o utilizar la version remota y perder la local
//? Si lo abrimos en visual studio nos ca a mostrar dos opciones en donde debemos elegir