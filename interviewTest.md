# Preguntas tipo test

## 1- witch vue lifecicle hook can be use to validate props?

## 2- Local registration for components in vue is done using

En Vue, puedes registrar componentes de forma local dentro de otro componente, de modo que solo estén disponibles en ese componente específico. Para hacerlo, se utilizan las opciones de la propiedad components dentro de la definición del componente.

Tempate:

```javascript
<template>
  <div>
    <h1>Componente principal</h1>
    <ChildComponent />
  </div>
</template>
```

Options API :

```javascript
import ChildComponent from './ChildComponent.vue'
export default {
    name: 'MainComponent',
    components: { ChildComponent // Registro local del componente } }
```

Composition API :

```javascript
<script>
import { defineComponent } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default defineComponent({
  name: 'MainComponent',
  components: {
    ChildComponent  // Registro local del componente
  }
})
</script>

```

## 3-cual de los siguientes es un system-modifier en vue? .once .prevent .stop .exact

En Vue, los system modifiers son modificadores de eventos que ayudan a manejar eventos de manera específica en función de teclas o botones del sistema, como Ctrl, Alt, Shift, etc. En este caso:

El único system modifier en la lista es .exact. Los demá son modificaores de eventos.

Explicación de cada modificador:
.once: Permite que el evento se ejecute solo una vez y luego se elimine el listener.
.prevent: Llama a event.preventDefault(), evitando el comportamiento predeterminado del evento.
.stop: Llama a event.stopPropagation(), evitando que el evento se propague hacia los elementos padres.
.exact: Es un system modifier que asegura que solo se ejecutará el evento cuando las teclas modificadoras específicas estén activas o inactivas. Por ejemplo, si defines .exact, el evento solo se disparará si ninguna otra tecla (como Ctrl o Shift) está presionada.

# 4- You are developing a Vue.js application and you need to handle a keyup event on an input field. Which of the following methods should you use?

@submit
@keyup => este
@input
@click

# 5-How can you navigate to a nested route in Vue.js?

By using the "router-link" component with the appropriate "to" attribute => este

By calling the "Srouter.go" method with the appropriate route index

By calling the "$router.push" method with the appropriate path => (para navegar programaticamente. desde un metodo)

By using the "router-view" component with the appropriate "name" attribute

# 6 Pick the Vue.js built-in directive which update the element's innerHTML?

v-text => convierte el contenido en texto plano.

v-content => NO EXISTE EN VUE

v-data => NO EXISTE EN VUE

v-html => Esta

```javascript
<div v-html="rawHtmlContent"></div>
```

# 7- que directiva de vue se usa para two-way binding? v-model, v-on, v-bind, ninguna

v-model => crea una vinculación bidireccional entre el valor de un elemento de formulario y una propiedad en los datos del componente
v-on => Para vincular eventos
v-bind => No es two-way. Se usa para vincular valores a atributos HTML, pero no es bidireccional.

# 8- What is a not modifier of v-on Vue built in directive? .passive .self .capture .lazy

.lazy no es un modificador de la directiva v-on en Vue. En su lugar, es un modificador de la directiva v-model, y permite que la actualización de los datos solo se sincronice cuando el campo de entrada pierde el foco.

Explicación de los otros modificadores:
.passive: Establece el listener de eventos como pasivo, lo que puede mejorar el rendimiento indicando que el evento no usará preventDefault().

.self: Asegura que el evento solo se active si se origina en el propio elemento y no en elementos hijos.

.capture: Configura el listener para usar la fase de captura en lugar de la fase de propagación predeterminada.

# 9 - Which directive is used to render the component associated with the current route in a Vue application

v-route-render => NO EXISTE
v-route-view => NO EXISTE
v-router-link
v-route-render

En Vue, <router-view> es el componente que se usa para renderizar dinámicamente el componente asociado con la ruta actual
(aunque no es una directiva, sino un componente de Vue Router).

```html
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

# 10 -Which of the following options sould be used to implement lazy loading of a component in Vue Router? import, require, component, export

En Vue Router, la carga diferida de un componente se logra usando la función import() en la propiedad component de la configuración de rutas. Esto permite que el componente se cargue solo cuando se necesita, en lugar de incluirlo en el paquete inicial, lo cual mejora el rendimiento.

```js
const routes = [
  {
    path: "/ruta",
    component: () => import("./RutaComponente.vue"), // Lazy loading del componente
  },
];
```

# 11- what is the purpose os the “once” modifier in Vue event listeners

to listen forman event with a specific delay between each occurrence
to listen forman event only once and then automatically unbind the listener => CORRECTA
to listen forman event repeatedly until a certain condition is met
to listen forman event only if a certain condition is met

# 12 - Which Vue built in directiv can skip compilation for this element and all its children ? v-skip, v-pre, v-ele, v-jmp

v-pre es una directiva incorporada en Vue que permite omitir la compilación de un elemento y todos sus elementos hijos. Esto puede ser útil cuando deseas mostrar código sin que Vue lo interprete o cuando quieres mejorar el rendimiento omitiendo la compilación en ciertos elementos.

```js
<div v-pre>{{ estoNoSeCompila }}</div>
```

# 13 - what is the purpose of the prevent modifier in Vue?

prevent event to … being triggered
……from being captured during the capturing phase
……default browser behavoir for the event => CORRECTA
……from propagating to the parent component

# 14 - How can you pass the event object to an event handler in vue? v-if directive, v-bind, v-on with $event keyword, v-model directive

Para pasar el objeto del evento a un manejador de eventos en Vue, puedes usar v-on y la palabra clave $event para referirte al objeto del evento. Esto es útil cuando necesitas acceder a detalles específicos del evento, como la tecla presionada, el valor de entrada, etc

```js
<button @click="handleClick($event)">Haz clic aquí</button>

export default {
  methods: {
    handleClick(event) { // Aquí puedes usar cualquier nombre, como "e" o "event"
      console.log("Detalles del evento:", event);
    }
  }
}

```

# 15- V-on built in directive to syntax to chain modifiers

la sintaxis de v-on para encadenar modificadores es usar múltiples modificadores con puntos (.) después del evento, como en @click.stop.prevent.

```js
<button @click.stop.prevent="handleClick">Haz clic aquí</button>
```

# 16- how can you pass data between routes in Vue.js Router? params option, query options, vuex store, props option in router-link component

La opción params es una respuesta correcta, pero también query, Vuex, y props en router-link son válidas dependiendo del caso.

# 17- How do you create a method using the Composition API? using .....

the watch function
computed function
reactive function
ref function

Ninguna es correcta. La respuesta sería como una función regular dentro de la función setup

# 18 - How can you listen to a custom event in Vue? using v-on directive, v-bind, v-if, v-model

v-on

# 19- What is v-model used for in Vue.js forms

-To create custom form inputs
-to validate form inputs values

- to bind form inputs to data properties => ESTA
- to submit form data to a server

# 20 - correct way to define a new route in vue —-(‘/path’, component)?

la respuesta correcta sería usar el objeto de rutas con createRouter o router.addRoute

```js
import { createRouter, createWebHistory } from "vue-router";
import MiComponente from "./MiComponente.vue";

const routes = [
  {
    path: "/ruta",
    component: MiComponente,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

agregar ruta dinámica

```js
router.addRoute({ path: "/nueva-ruta", component: OtroComponente });
```

# 21 - Which vue function creates an application instance?

create.app()

# 22- Which Vue router method is used to navigate to a new route programmatically?

router.push

# 23- How can you submit a form using Vue js. Using ...

v-bind:submit directive
v-model:submit directive =>
v-on:submit directive => esta <form @submit.prevent="handleSubmit"> (v-on:submit (abreviado como @submit) )
v-submit directive => NO EXISTE

# 24- what is the purpose of a v-model directive?

bind a form input to a component property => ESTA
bind a component method to a form input
bind a component property to a parent component
bind a computed property to a component method

# 25- Can a child component modify the data provided by its parent using provide-inject?

yes,
no, => los datos proporcionados son de solo lectura para los componentes hijos.
depends upon the version,
depends upon implementation

# 26- what is a dynamic component

- A component that is used to manipulate the DOM directly
- A component that is used to handle events
- A component that can be synamically loades at runtine
- A component that can be used to create dynamic content

# 27- How can you pass arguments to an event handler in Vue.js? using v-model, v-if, v-on, v-bind

Entiendo que es v-on
<button @click="saludar('Juan', $event)">Saludar</button>

# 28- what is the purpose of component in vue router?

it allows you to define a named view for the route
it displays the current route’s component => ESTA
it defines the router link for the current route
ir allows you to define child routes for a parent route

# 29- Select the modifier of v-bind Vue.js built in directive which force a binding to be set as a DOM attribute? .dom, .attribute, .attr, .domatte

attribute, .attr, .domatte => NO EXISTEN

el modificador .dom se usa con v-bind cuando deseas que una vinculación específica se establezca como un atributo del DOM en lugar de una propiedad de JavaScript en el elemento.

Por ejemplo, para forzar que el atributo textContent se agregue directamente al DOM (en lugar de ser una propiedad), puedes usar .dom:

```html
<div v-bind:text-content.dom="mensaje"></div>
```

# 30- Which of the following Vue dirctives is used to render conditional content

v-bind
v-if => ESTA
v-for
v-on

# 31. what is the purpose of the trim modifier in -vue from inputs

limpiar espacios en blanco

# 32- What is the purpose of the provide-inject system in vue?

- to share dat beween chils an parent components => esta
- to simplify component communication => (podria ser tambien)
- to manage asynchronous operations
- to optimize component rendering

# 33- what is the purpose of the keep alive component in vue

- pass props to child components
- to handel events between components
- to dynamically create and destroy components at runtime
- to cache and reuse components that are expensive to create => ESTA

se utiliza para almacenar en caché y reutilizar componentes cuando se navega entre ellos, evitando su destrucción y recreación cada vez que se vuelven a montar. Esto es útil para mejorar el rendimiento cuando tienes componentes que son costosos de crear o que necesitan mantener su estado entre montajes y desmontajes.
<keep-alive>
<component-a v-if="mostrarComponenteA" />
</keep-alive>

# 34 What is the purpose of the provide() method?

El propósito del método provide() en Vue es compartir datos desde un componente padre a sus componentes hijos sin tener que pasar explícitamente las propiedades (props) a través de cada nivel intermedio de componentes. Esto simplifica la comunicación en componentes anidados, permitiendo que los hijos accedan a ciertos valores que el componente padre "proporciona".

Cómo funciona provide:
provide(): El componente padre define los valores que quiere compartir con sus hijos usando provide(). Estos valores se establecen de forma que estén disponibles para los componentes hijos.
inject(): Los componentes hijos pueden acceder a estos valores usando inject(), lo que les permite leerlos directamente sin que tengan que ser pasados por cada componente intermedio.

```js
// Componente Padre
export default {
  provide() {
    return {
      mensaje: "Hola desde el componente padre",
    };
  },
};
```

```js
// Componente Hijo
export default {
  inject: ["mensaje"],
  mounted() {
    console.log(this.mensaje); // Output: "Hola desde el componente padre"
  },
};
```

# 35 -How do you access a parent component's methods from a child component?

Using this.$parent.methodName() => ESTA

Using this.$child.methodName()

Using Vue.parent.methodName()

This is not possible in Vue.js

Using this.$parent.methodName(), aunque esta práctica se debe usar con precaución, ya que puede hacer que el código sea menos mantenible y difícil de entender.

```js
this.$parent.nombreDelMetodo();
```

# 36 - In which lificycle is the provide function used? created, update, beforeDestroy, mounted

# event handler vs event bus

# 37 Which of the following options can you use to specify a custom error message for a prop validation in Vue.js?

# validateMessage message error validatorMessage

# what is the purpose of using the v-cloak directive when lazy loading a component?

- to set the style of the component while it is being loaded
- to prevent the component from being loaded lazily
- to specify the name of the component being lazy-loaded
- to hide the omponent while is being loaded

# 38 - which built-in directive which overwrites any existing content inside the element?

v-content, v-text, v-data, v-html

# 39 We can bind, class to an array to apply a list of clases?

- statement invalid
- statement valid
- depends upon the version
- depends upon implementation

# 40 in vue what is the purpose of the tag?

- add a component to the DOM
- to render a dynamic component
- To modify an existing component
- To dfine a new component

# 50 how can you use radio buttons in Vue forms?

- By using the :checked attribute binding
- By using the v-model directive
- By using the @click event modifier
- By using the :value attribute binding
