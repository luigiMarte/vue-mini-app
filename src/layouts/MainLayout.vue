<template>
  <div class="main-layout">
    <!-- Side bar -->
    <aside class="sidebar">
      <div class="lang-container">
        <LangSelector />
      </div>
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/slots-example">{{ $t("aside_slots") }}</router-link>
      <router-link to="/crud-example">{{ $t("aside_crud") }}</router-link>
      <router-link to="/axios-example">{{ $t("aside_APIcall") }}</router-link>
      <router-link to="/form-example">{{ $t("aside_form") }}</router-link>
      <router-link to="/catalog-example">{{ $t("aside_catalog") }}</router-link>
    </aside>

    <!-- Contentt area to display views -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LangSelector from "@/components/LangSelector.vue";
export default {
  name: "MainLayout",
  components: {
    LangSelector,
  },
};
</script>

<style scoped>
.main-layout {
  display: flex;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #04aa6d;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: rgb(69, 30, 153);
  color: white;
}

.lang-container {
  width: 50%;
}

.content {
  margin-left: 200px;
  padding: 20px 16px;
}
</style>
