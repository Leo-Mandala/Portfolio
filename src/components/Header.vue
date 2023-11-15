<template>
  <header class="bg-purple-700 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white">Accueil</router-link>
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-white">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex space-x-4">
        <router-link to="/about" class="text-white">À propos</router-link>
        <router-link to="/skills" class="text-white">Compétences</router-link>
        <router-link to="/projects" class="text-white">Projets</router-link>
        <router-link to="/contact" class="text-white">Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const nav = document.querySelector('.lg\\:flex');
      nav.classList.toggle('hidden');
    }
  }
};
</script>

<style scoped>
/* You can add custom Tailwind styles here if needed */
</style>
