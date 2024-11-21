# testing-scaffold

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Formas de usar Composition API

En Vue 3, hay varias formas de usar la Composition API. Te explico las principales opciones:

- <script setup> (Recomendado)
- <script> con setup()
- Options API con Composition API
- Composition API con TypeScript

A continuación vamos a ver cada una de ellas

### 1- Con script setup

Ver ejemplo en components/ ScriptSetup

Ventajas:

- Sintaxis más concisa
- Menos código boilerplate
- No necesita return
- Las importaciones y variables están automáticamente disponibles en el template
- Mejor rendimiento en tiempo de compilación

### 2- Con setup()

Ver ejemplo en components/ Setup

Ventajas:

- Mayor control sobre lo que se expone al template
- Acceso a las opciones del componente como props y context
- Más familiar para usuarios de Vue 2

### 3- Options API con Composition API

Ventajas:

- Permite migración gradual
- Puedes combinar ambos estilos
- Útil para proyectos que están migrando de Vue 2

### 4- Composition API con TypeScript y script setup

Ventajas:

- Sintaxis más moderna y concisa
- Mejor inferencia de tipos automática
- defineProps y defineEmits con tipos genéricos
- No necesita defineComponent
- Mejor soporte de IDE

### 5- Composition API con TypeScript y setup()

- Necesita defineComponent para soporte completo de TS
- Requiere más código boilerplate
- Props definidas de manera más tradicional
- Más familiar para desarrolladores de Vue 2
- Mayor control sobre el contexto del componente

### 6- Composables (con o sin typesript)

## Recomendaciones de uso

- Para nuevos proyectos:

Usa <script setup> como opción predeterminada
Añade TypeScript si el proyecto es grande o requiere tipo estático

- Para proyectos existentes en Vue 2:

Comienza con Options API + Composition API
Migra gradualmente a <script setup>

- Para lógica reutilizable:

Usa Composables para extraer y compartir lógica
Organiza los composables en archivos separados

- Para proyectos complejos:

Combina TypeScript con <script setup>
Utiliza Composables para organizar la lógica
Considera mantener algunos componentes con setup() normal si necesitas más control
