<template>
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
</template>

<script setup></script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-weight: bold;
  margin-bottom: 8px;
}

.card-content {
  margin-bottom: 8px;
}

.card-footer {
  font-size: 0.9em;
  color: #666;
}
</style>
