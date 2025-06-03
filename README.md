1  	Descripción
 
La automotora Multimotors de Punta del Este está dando un paso hacia la modernización y expansión de su oferta de servicios con la introducción de un nuevo proyecto: Diamond Rentals, su nueva sección centrada en el alquiler de autos de lujo. Reconociendo la creciente demanda por experiencias exclusivas y personalizadas, Multimotors ha decidido aprovechar la tecnología para facilitar el acceso a vehículos de alta gama a través de su plataforma web.
La plataforma online permitirá a los usuarios explorar una flota de autos premium, comparar opciones, realizar reservas en tiempo real y gestionar sus alquileres con total flexibilidad.
Al adoptar esta estrategia digital, Diamond Rentals no solo se adapta a las tendencias actuales del mercado, sino que también refuerza su compromiso con la excelencia en el servicio al cliente, ofreciendo una experiencia de alquiler de autos de lujo que es tan sofisticada y conveniente como los vehículos que pone a disposición.

1.2     Objetivo

El objetivo es desarrollar una web en la cual las personas que deseen tener una experiencia diferente y de lujo, puedan cumplir su sueño de manejar un superdeportivo por las calles de Punta del Este. Se ejecutará en la web, utilizando los lenguajes de programación HTML, CSS y JavaScript.

2  	Especificación de requerimientos

2.1 Requisitos del Cliente
La página deberá estar hecha en HTML 5.

Deberán utilizarse etiquetas semánticas para el mejor entendimiento de un tercero al leer el código y facilidad al modificarlo con estilos.

Utilización de hojas de estilo en CSS para formatear visualmente a gusto la página.

Deben haber un mínimo de 4 pestañas navegables entre sí.


 2.2 Requerimientos del Cliente

Listado de ítems, cada uno de los cuales conteniendo un título, foto, breve descripción y enlace a la página principal de dicho ítem.

Formulario con validación frontend con los siguientes campos (algunos ellos deben ser requeridos)
I. Grupo de campos de selección múltiple (checkbox)
II. Grupo de campos de selección excluyente (radio)
III. Campo de texto, número, mail, fecha (input)
IV. Campo de texto multilínea (textarea)
V. Componente de Selección (select)

Contenidos multimedia: Imágenes, slider, reproductor de video, audio y galería de imágenes (se deberán incluir al menos dos)

Tabla de datos con un mínimo de dos columnas

Contenidos de texto navegable a través de un menú de anclas





3       Análisis
Para el primer requerimiento lo solucionamos en la pestaña de la página “Porsche”, pudiendo llegar a ella desde la página “Catálogo”. En la página “Porsche”, contamos con tres modelos de vehículos distintos, cada uno teniendo una imagen, el nombre y un breve resumen de las especificaciones técnicas, como el motor, la potencia y el tren de dirección.
Para completar el segundo requerimiento, decidimos colocar un formulario al cual se puede llegar fácilmente desde la barra de navegación superior. Este funciona con el botón de “Contáctenos”, en cuanto es apretado, aparece un formulario para rellenar con el nombre del comprador, su número celular y el mail, teniendo un botón para enviar y otro para cerrar el formulario.
Tenemos varias imágenes de multimedia en la página y contamos con un video de demostración de cada coche dentro de la página de cada uno. Con esto, daríamos el tercer punto de requerimiento como completado.
En relación al cuarto punto, en la pestaña “Sobre Nosotros”, tenemos un apartado con nuestras informaciones generales en la mitad de la página y en la otra mitad, un mapa de localización para encontrar la agencia con más facilidad. Además, podemos encontrar varias columnas y filas en el menú principal como en el catálogo.
El quinto requisito se puede ver completado en la barra de navegación, utilizando textos en listas sin ordenar como anclas.

Requerimientos no cumplidos
El formulario que se decidió utilizar fue uno breve con la simple función de contacto con la empresa. Por esa razón no se utilizaron más campos que los de texto.
Muchos elementos de la página se adaptaron para que fueran responsive, más hay algunos elementos que en ciertas resoluciones no se adaptan correctamente al resto del contenido de la página.

4       Estructura de la página

Diseño Pagina Principal


El diseño de la página principal es el index de la página y es la base del diseño para las demás páginas.
En la parte superior cuenta con una barra de navegación por la cual el usuario puede acceder a las diferentes secciones de la página. La misma es trasparente sobre el header y cambia a color negro una vez se avanza hacia abajo en el contenido de la pagina. 
El logo es el ancla para el retorno a la página principal, estando en cualquier otra página.
La barra de navegación es Responsive, al disminuir el tamaño de la pantalla, las anclas de la derecha desaparecen y se despliega un botón “hamburguesa” con la función de desplegar una cortina a la derecha de la pantalla con las mismas anclas disponibles en la versión de mayor dimensión.

En la zona inferior se diseñó un footer que sirve como pie de página para todas las páginas del aplicativo. El mismo cuenta con el logo de la empresa, información general e iconos para las redes sociales. El mismo es responsive, haciendo que su contenido se vea de manera ordenada y vertical cuando las dimensiones son inferiores.


Diseño Formulario de contacto

	
Al seleccionar “Contáctenos” en la barra de navegación, aparecerá un formulario con el objetivo de rellenarlo con los datos del cliente y así enviarselos a Diamond Rentals para que ellos se comuniquen con él.
Diseño Página Catálogo
Cuando seleccionamos “Catálogo” en la Barra de navegación, se podrán ver todas las marcas disponibles para alquilar.


Diseño Página Sobre Nosotros
Al ir al apartado “Sobre Nosotros”, se abre una pestaña en la cual aparecen datos generales sobre Diamond Rentals y su ubicación en el mapa.
Diseño Página Supercoches
Cuando se pasa el mouse por arriba de “Modelos”, aparece un dropdown con las opciones Super Coches, SUV y Sedan. Al hacer click, se dirige directamente hacia la página de preferencia.




Diseño Página de Marca y Modelos
Al seleccionar un coche específico, aparece el mismo con sus especificaciones y una foto de este.


6       Conclusiones finales
 
El proyecto ha cumplido con éxito la mayoría de los requisitos planteados, implementando una estructura de navegación sólida con múltiples pestañas, un catálogo visualmente atractivo y un sistema de formulario que facilita el contacto con la empresa. Además, se han integrado contenidos multimedia y una interfaz interactiva que mejora la experiencia del usuario.
En resumen, el proyecto ha sido un avance significativo para Multimotors en su incursión en el alquiler de autos de lujo. La plataforma está bien encaminada hacia su objetivo de ofrecer una experiencia digital de lujo, aunque aún quedan áreas por optimizar en futuras iteraciones del desarrollo web.
