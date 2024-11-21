<template>
  <div>
    <RoutesButton text="go back" goBack />
    <h3>Configurar llamadas a una API con Axios</h3>
    <h4>Crea una Instancia de Axios Configurada</h4>
    <p>
      Crea un archivo axiosInstance.js donde configuras la URL base y otros
      parámetros globales.
    </p>
    <CodeBlock :code="axiosInstance" />
    <h4>Crea Módulos de Endpoints</h4>
    <p>
      Organiza las llamadas API en archivos por funcionalidad (por ejemplo,
      usersApi.js).
    </p>
    <CodeBlock :code="endpointModules" />
    <h4>Llama a la API en un Componente Vue</h4>
    <p>
      En el componente, importa la función del endpoint que necesitas y llama a
      la API en el ciclo de vida o en eventos.
    </p>
    <CodeBlock :code="componetCode" />
  </div>
</template>

<script setup>
import RoutesButton from "@/components/RoutesButton.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import {
  axiosInstance,
  endpointModules,
  componetCode,
} from "@/codeBlocks/ApiCalls";
</script>
