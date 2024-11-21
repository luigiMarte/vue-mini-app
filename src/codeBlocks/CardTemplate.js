// CardTemplate.js
export const cardCode = `
 <div class="card">
    <!-- Named slot para el encabezado -->
    <header class="card-header">
      <slot name="header">Default header</slot>
    </header>

    <!-- Default slot para el contenido principal -->
    <main class="card-content">
      <slot>Default card content</slot>
    </main>

    <!-- Named slot para el pie de página -->
    <footer class="card-footer">
      <slot name="footer">Default footer</slot>
    </footer>
  </div>
`;

export const viewCode = `<template>
  <SimpleCard>
      <template #header>
        <span>Card Title</span>
      </template>
      <!-- This is main content -->
      <p>Content from parent component</p>
      <!-- In footer we use default content -->
      <template #footer></template>
    </SimpleCard>
</template>
`;
