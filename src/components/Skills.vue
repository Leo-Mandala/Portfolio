<template>
    <div class="container mx-auto mt-8 fade fade-container opacity-0">
      <h2 class="text-2xl font-semibold mb-4">Mes Compétences</h2>
      <ul class="list-disc">
        <li>Vue.js</li>
        <li>React</li>
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>Responsive Web Design</li>
      </ul>
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
  