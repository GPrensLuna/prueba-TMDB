# Prueba Técnica Full-Stack

## `Contexto`

Como Desarrollador FullStack en **QuickbetMovies**, serás responsable de desarrollar y mantener interfaces de usuario intuitivas y eficientes, optimizando la experiencia del cliente en nuestras plataformas web. Este proyecto evaluará tu capacidad para implementar funcionalidades esenciales y avanzadas tanto de frontend como de backend, siguiendo buenas prácticas de **clean code** y **patrones de diseño**.

### **IMPORTANTE ANTES DE EMPEZAR!**

**No buscamos contratar a ChatGPT o Gemini!** 😅

## Objetivo de la prueba

Desarrollar una aplicación web de cine que consuma la API de [**TMDB**](https://www.themoviedb.org/) y construir un back-end utilizando NestJS. Se evaluará tu capacidad para implementar funcionalidades básicas, paginación, filtros, gestión de usuarios, autenticación y favoritos, así como tu aplicación de buenas prácticas de desarrollo, optimización y documentación.

## **1. Descripción del Proyecto**

### **Front-End (Next.js)**

**Requisitos Esenciales:**

1. **Páginas de Películas:**
    - Implementa una página que muestre una lista de películas populares usando la API de TMDB.
    - Implementa **paginación** o **carga infinita** para manejar grandes conjuntos de datos.
    - **Filtros Básicos:**
        - **Filtro por Género:** Permite a los usuarios filtrar las películas según el género.
    - **Campo de Búsqueda por Palabra Clave:** Implementa un campo de búsqueda para filtrar películas por palabras clave.
2. **Página de Detalles de la Película:**
    - Crea una página de detalles que muestre información básica de una película, incluyendo imagen de póster, título, fecha de estreno, géneros, rating y resumen.
    - Permite a los usuarios marcar la película como favorita.
3. **Autenticación Básica:**
    - Implementa funcionalidades básicas de registro e inicio de sesión utilizando un sistema de autenticación básico.

**Estilos y Responsividad:**

- Asegura que la aplicación sea completamente responsive y accesible en diferentes dispositivos y navegadores.
- Utiliza CSS Modules para manejar los estilos.

**Despliegue:**

- Despliega la aplicación en una plataforma como Vercel o Netlify.

**Nota:** Se proporcionará el diseño necesario para el desarrollo del frontend.

https://www.figma.com/design/dozzsu7lHKpMA90HgF0rLk/Prueba-t%C3%A9cnica-Desarrollador-FS-%2F-08%2F24?node-id=1901-2143&t=9iNHogavf3e1Eqgj-1

### **Back-End (NestJS)**

**Requisitos Esenciales:**

1. **Gestión de Usuarios:**
    - **Crear Usuario:** Endpoint para crear un nuevo usuario.
    - **Encontrar Usuario por ID:** Endpoint para obtener los detalles de un usuario por su ID.
    - **Encontrar Todos los Usuarios:** Endpoint para obtener una lista de todos los usuarios.
    - **Actualizar Usuario:** Endpoint para actualizar la información de un usuario.
    - **Soft Delete Usuario:** Endpoint para realizar un soft delete de un usuario (marcarlo como eliminado sin eliminarlo físicamente de la base de datos).
2. **Autenticación y Gestión de Sesiones:**
    - **Sign Up:** Endpoint para el registro de nuevos usuarios.
    - **Login:** Endpoint para iniciar sesión utilizando JWT.
    - **Logout:** Endpoint para cerrar sesión y invalidar el token JWT.
3. **Gestión Básica de Favoritos:**
    - **Marcar y Desmarcar Favoritos:** Funcionalidad para que los usuarios puedan marcar y desmarcar películas como favoritas.
    - **Obtener Lista de Favoritos:** Endpoint para devolver la lista de películas favoritas de un usuario.

**Documentación y Despliegue:**

1. **Documentación de API:**
    - Utiliza Swagger para documentar los endpoints del backend (gestión de usuarios, autenticación y favoritos).
2. **Despliegue:**
    - Despliega el back-end en una plataforma como Heroku o un repositorio multipaquete.

**Nota:** Se proporcionan los repositorios base tanto para el frontend como para el backend. El candidato deberá clonar estos repositorios en su entorno local, eliminar la carpeta `.git` y luego trabajar sobre los repositorios clonados. Finalmente, deberá compartir su solución completa.

### **Puntos Opcionales**

**Estos puntos no son obligatorios, pero si se implementan, pueden sumar puntos adicionales en el resultado final de la prueba.**

- **Front-End**
    - **Restablecimiento de contraseña.**
    - Internacionalización (i18n).
    - **Modo oscuro/claro.**
- **Back-End**
    - Caching con Redis.
    - Gestión completa de calificaciones de películas.
    - **Autenticación multifactor (MFA).**

## **Consideraciones Finales**

### **Buenas Prácticas Generales:**

- **Clean Code y Patrones de Diseño:**
    - Aplica buenas prácticas de clean code y patrones de diseño en todas las áreas del proyecto para asegurar un código mantenible y escalable.
    - Mantén una estructura de código clara, con nombres descriptivos y una separación adecuada de responsabilidades.

### **Extensiones Recomendadas:**

- ESLint
- SonarLint
- Prettier
- Error Lens

## **3. ¿Qué se espera de ti en esta prueba? (IMPORTANTE)**

- **Dominio de las tecnologías:** Next.js (Front-end), React.js (Front-end) y NestJS.
- **Habilidades de documentación:**
    - **Redacción clara y concisa:** Redacta procedimientos operativos estándar (SOP) de manera clara, concisa y fácil de seguir, utilizando un lenguaje sencillo y evitando tecnicismos innecesarios.
    - **Estructura lógica:** Organiza la información de manera lógica y secuencial, siguiendo un flujo de trabajo claro y evitando saltos bruscos o información incompleta.
    - **Modelado de la arquitectura:** Diagramado del planteamiento de la solución.
- **Enfoque en la mejora continua:**
    - **Identificar oportunidades de mejora:** Analiza los procesos actuales y detecta áreas donde se pueden aplicar mejoras para optimizar la comunicación, prevenir errores y agilizar el proceso de desarrollo.
    - **Proponer soluciones efectivas:** Desarrolla e implementa soluciones prácticas y escalables que aborden las necesidades identificadas y contribuyan a la mejora continua de los procesos.
- **Comunicación efectiva de las propuestas:** Presenta las propuestas de manera clara y convincente, destacando los beneficios y el impacto positivo que tendrán en la organización.
    - La funcionalidad
    - La claridad y calidad del código
    - La eficiencia del rendimiento y la escalabilidad del sistema
    - Componentes
    - Validaciones

## **4. Recursos para Hacer la Prueba**

- [Documentación Oficial Next.js](https://nextjs.org/)
- [Documentación Oficial NestJS](https://docs.nestjs.com/)
- [API, The Movies Database (TMDB)](https://www.themoviedb.org/)
- Backend Base: https://github.com/sport-enlace-sas/backend-challenge-base
- Frontend Base: https://github.com/sport-enlace-sas/frontend-challenge-base
- **PLANTILLAS EJEMPLO DE DOCUMENTACION,  👇🏽**
Cree cualquier cosa con miles de plantillas, o incluso los templates disponibles en Notion hay MILES! 😁 (puedes buscar cualquiera gratis, con un tema puntutal) Ejemplo, HR.

![HR templates.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c2a29e-e90d-4bca-a0de-75784d3118ba/893c702f-7a71-4b0f-b44f-08bae0205b67/HR_templates.png)

**RECURSOS DE APOYO 👇🏽 (EJEMPLOS)**

https://www.notion.so/es-la/templates/engineering-wiki

https://www.notion.so/es-la/templates/bug-tracker

## **6. Respóndenos en nuestra página oficial,**

**Debes entregar la prueba en NOTION**

**(No archivos locales)** 😁

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c2a29e-e90d-4bca-a0de-75784d3118ba/2dd837d7-bffe-47d8-bb71-895658e24af7/Untitled.png)

## **Repositorio en GitHub:**

- Proporciona el código fuente completo de los microservicios, incluyendo los archivos de configuración necesarios.
- Incluir un archivo README con instrucciones claras sobre cómo configurar y ejecutar.
- Puedes utilizar cualquier herramienta de control de versiones y alojar el código en un repositorio público.
- Entregar el código fuente del repositorio (git).
- Se valorará positivamente cualquier mejora adicional o funcionalidad extra que agregues a la aplicación.
- Recuerda documentar cualquier decisión técnica relevante y cualquier desafío superado durante el desarrollo.

¡Éxitos!

# **Tienes 48 horas** ⏰  **desde el momento del inicio del cronograma, para elaborar, y enviarnos de vuelta tu prueba.** 👊🏽

## AVISO IMPORTANTE

*Apreciado candidato*

*Al postularte a este proceso de selección, te indicamos que las pruebas que realices tienen como único objetivo evaluar tus competencias profesionales y personales. Es importante destacar que estas pruebas NO garantizan automáticamente el acceso al empleo que deseas.*

*Queremos que tengas la plena seguridad de que la empresa se compromete de manera estricta y transparente a no utilizar el material que desarrolles para ningún fin fuera del proceso de selección. Este material será utilizado exclusivamente para evaluar tus habilidades en el contexto de este proceso. Además, renuncias a cualquier reclamación de derechos de autor o propiedad intelectual sobre dicho producto, ya que su uso estará limitado únicamente a este proceso de selección*