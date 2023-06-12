<template>
  <div class="acerca">
    <h1>Acerca de DrWriting</h1>
    <p>
      DrWriting es una aplicación web desarrollada por Daniel Sanz Herrero como trabajo final de grado. Está diseñada para gestionar usuarios y su acceso a diversas funcionalidades basado en su tipo de usuario y grupo asignado.
    </p>
    <h2>Funcionalidades</h2>
    <ul>
      <li>Registro y inicio de sesión de usuarios</li>
      <li>Autenticación y autorización</li>
      <li>Múltiples tipos de usuario: Super, Manager e Ingeniero de Aplicaciones</li>
      <li>Gestión de perfiles de usuario</li>
      <li>Gestión de grupos de usuarios</li>
      <li>Gestión de proyectos</li>
      <li>Gestión de documentos</li>
      <li>Gestión de categorías</li>
      <li>Gestión de etiquetas</li>
      <li>Integración con la API de Konfuzio</li>
    </ul>
    <h2>Tipos de Usuario y Permisos</h2>
    <p>
      La aplicación tiene tres tipos de usuarios con diferentes niveles de acceso y permisos:
    </p>
    <ul>
      <li><strong>Super Usuario:</strong> Puede agregar, modificar y eliminar usuarios de todos los tipos.</li>
      <li><strong>Manager:</strong> Puede agregar, modificar y eliminar Ingenieros de Aplicaciones.</li>
      <li><strong>Ingeniero de Aplicaciones:</strong> Tiene permisos de acceso específicos basados en el grupo de usuario asignado.</li>
    </ul>
    <h2>Integración con la API de Konfuzio</h2>
    <p>
      DrWriting se integra con la API de Konfuzio para obtener información relacionada con proyectos, documentos, categorías y etiquetas. Se utiliza la biblioteca Axios para realizar solicitudes HTTP a la API de Konfuzio para la manipulación y recuperación de datos.
    </p>
    <h2>Base de Datos</h2>
    <p>
      La aplicación utiliza una base de datos MySQL para almacenar y gestionar la información de los usuarios, incluidos los detalles del usuario, los tipos de usuario, los grupos de usuarios, los proyectos, los documentos, las categorías y las etiquetas.
    </p>
    <h2>Tecnologías Utilizadas</h2>
    <ul>
      <li>Vue.js</li>
      <li>Express.js</li>
      <li>MySQL</li>
      <li>Axios</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
    </ul>
    <h2>Autor</h2>
    <p>
      Daniel Sanz Herrero
    </p>
  </div>
</template>

<style scoped>
.acerca {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

ul {
  margin-top: 0;
  margin-bottom: 20px;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}
</style>
