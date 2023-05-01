<h1>PROYECTO TAROT-FLORES DE BACH</h1>
<h2>Tarot que utiliza las cartas de los arcanos mayores y su relación con las 
Flores de Bach para ofrecer resultados precisos y personalizados en cada tirada</h2>


PROYECTO000(htmlcssjs)



especificaciones 
quiero que el sitio esté optimizado y funcione en todos los dispositivos. 
Usando un diseño responsive, utilizando HTML y CSS para adaptar la presentación 
del sitio a distintos tamaños de pantalla.


En un principio quier0 mostrar 22 cartas con la imagen de la contratapa 
primero distribuidas por la pantalla. 


Para lograr esto, utilizar HTML y CSS para crear un grid o masonry layout 
que muestre todas las imágenes de las cartas. Y utilizando CSS puedes darle 
un estilo atractivo y coherente a la presentación de las imágenes.


Ademas quiero que el usuario pueda hacer click en tres cartas y estas se den vuelta 
para mostrar tres imágenes distintas de los arcanos mayores. Para lograr esto, usar JavaScript 
para detectar el click del usuario en las cartas y cambiar el contenido de las imágenes.


Ademas que haya un botón verde en la parte inferior que diga "mostrar resultado". 
Para lograr esto, puedes utilizar HTML y CSS para crear un botón con el estilo que desees. 
y cuando se clickee aparezca un alerta en pantalla que devuelva la suma de los contenidos 
del archivo excel de la columa "flordebachparatratamiento" teniendo en cuenta las tres 
imágenes que habia salido en la tirada del usuario. Utilizar JavaScript para leer el archivo CSV 
y extraer los valores de la columna "flordebachparatratamiento" correspondientes a las 
tres imágenes seleccionadas por el usuario. Luego puedes sumar estos valores y
mostrar el resultado en una alerta utilizando JavaScript.


Espero se entienda








PROYECTO001(flask)

Quiero crear una aplicación web de tarot utilizando Flask de Python. La aplicación debe tener
las siguientes funcionalidades:


Mostrar 22 cartas de los arcanos mayores con la imagen de la contratapa en un masonry layout. 
Utiliza HTML y CSS para crear un diseño responsive que se adapte a diferentes tamaños de pantalla.


Permitir al usuario hacer clic en tres cartas para darles vuelta y mostrar tres imágenes de los 
arcanos mayores. Utiliza JavaScript para detectar el clic del usuario y cambiar el contenido de 
las imágenes.


Incluir un botón verde en la parte inferior de la pantalla que diga "Mostrar resultado". Utiliza 
HTML y CSS para crear un botón atractivo y coherente con el diseño de la aplicación.


Al hacer clic en el botón "Mostrar resultado", la aplicación debe mostrar un mensaje en pantalla 
que muestre la suma de los contenidos de la columna "flordebachparatratamiento" del archivo CSV 
correspondientes a las tres cartas seleccionadas por el usuario. Utiliza Python y la librería Pandas 
para leer el archivo CSV y extraer los valores correspondientes a las imágenes seleccionadas.



Para lograr esto, es necesario seguir los siguientes pasos:


Instalar Flask y las librerías necesarias para manipular archivos CSV y Pandas.


Crear una ruta en Flask para cargar las cartas de los arcanos mayores en el masonry layout.


Utilizar JavaScript para detectar el clic del usuario en las cartas y cambiar el contenido de las imágenes.



Crear una ruta en Flask para manejar el clic del botón "Mostrar resultado" y calcular la suma de los
contenidos del archivo CSV correspondientes a las tres imágenes seleccionadas.



Crear una plantilla de HTML que incluya el masonry layout de las cartas, el contenido de las imágenes
y el botón "Mostrar resultado".


Crear un archivo CSV con la información de las cartas y sus correspondientes contenidos en la 
columna "flordebachparatratamiento".


Crear una función en Python que lea el archivo CSV y extraiga los contenidos correspondientes a las 
tres imágenes seleccionadas.


Crear una función en Python que calcule la suma de los contenidos extraídos del archivo CSV.


Integrar todas las funcionalidades en la aplicación Flask.


Usando buenas prácticas de programación y diseño para crear una aplicación eficiente y legible.





PROYECTO003(django)



Especificaciones: 

quiero que el sitio esté optimizado y funcione en todos los dispositivos, utilizando un diseño
responsive con HTML y CSS para adaptar la presentación del sitio a distintos tamaños de pantalla.



En un principio, se mostrarán 22 cartas con la imagen de la contratapa, distribuidas en la pantalla. 
Para lograr esto, se utilizará Django y sus capacidades de renderización de plantillas HTML y CSS, 
junto con el manejo de imágenes. Se creará una vista en Django que renderice una plantilla HTML 
que contenga un grid o masonry layout para mostrar todas las imágenes de las cartas. Usando CSS, 
se dará un estilo atractivo y coherente a la presentación de las imágenes.



Además, se quiere que el usuario pueda hacer click en tres cartas y estas se den vuelta para 
mostrar tres imágenes distintas de los arcanos mayores. Para lograr esto, se utilizará JavaScript en 
conjunto con Django para detectar el click del usuario en las cartas y cambiar el contenido de las 
imágenes. Se creará una función en JavaScript que maneje el evento de click en las cartas, y se integrará 
con la vista de Django correspondiente para mostrar las nuevas imágenes en la página.



También se quiere agregar un botón verde en la parte inferior que diga "mostrar resultado". 
Para lograr esto, se utilizará HTML y CSS para crear un botón con el estilo deseado, y se integrará con 
una vista en Django que renderice la página correspondiente. Cuando se haga click en el botón, se mostrará 
una alerta en pantalla que devolverá la suma de los contenidos del archivo CSV de la columna
"flordebachparatratamiento", teniendo en cuenta las tres imágenes que el usuario ha seleccionado en la tirada. 
Se utilizará Pandas, una librería de manipulación de datos en Python, para leer el archivo CSV y extraer los 
valores de la columna "flordebachparatratamiento" correspondientes a las tres imágenes seleccionadas por
el usuario. Luego, se sumarán estos valores y se mostrará el resultado en una alerta utilizando JavaScript.
