<template>
    <div class="container mx-auto mt-8 fade-container opacity-0 animate-fade-in">
      <h2 class="text-2xl font-semibold mb-4 text-purple-900">Contactez-moi</h2>
      <p>N'hésitez pas à me contacter si vous avez des questions, des opportunités de collaboration ou simplement pour discuter de projets intéressants.</p>
      <p>Email: leo.mandala@outlook.fr</p>
      <p>Téléphone: 06 06 90 10 54</p>
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
  