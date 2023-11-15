<template>
    <div class="container mx-auto mt-8 fade fade-container opacity-0  animate-fade-in">
      <h2 class="text-2xl font-semibold mb-4 text-purple-900">À propos de moi</h2>
      <p>Je suis un développeur front-end avec un certain affect pour les technologies web modernes telles que Vue.js, React, et Tailwind CSS.</p>
      <p>Mon objectif est de créer des interfaces utilisateur élégantes, facile d'accés et conviviales qui offrent une excellente expérience utilisateur unique.</p>

    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
  
  .fade-container {
    animation: fade-in 0.5s ease-in-out forwards;
  }
  </style>