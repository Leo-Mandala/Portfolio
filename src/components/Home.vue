<template>
    <div class="container mx-auto mt-8 fade fade-container opacity-0">
      <h2 class="text-2xl font-semibold mb-4">Bienvenue sur mon portfolio</h2>
      <p>Je m'appelle Léo suis un développeur front-end passionné par la création d'expériences web exceptionnelles.</p>
      <p>Pouvoir etre capable de proposer une experience la plus unique possible avec chacune de mes création,
        est la mission que je me suis donnée.</p>
      <p>Naviguez à travers mon portfolio pour découvrir mes projets et compétences.</p>
      
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