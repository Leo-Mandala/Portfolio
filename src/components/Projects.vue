<template>
    <div class="container mx-auto mt-8 fade fade-container opacity-0">
      <h2 class="text-2xl font-semibold mb-4">Mes Projets</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Portfolio Personnel</h3>
          <p>Mon portfolio personnel présentant mes compétences et projets (ce que vous etes entrain de regarder).</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Application de Gestion de Tâches</h3>
          <p>Une application web simple pour gérer vos tâches quotidiennes.</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Blog Personnel</h3>
          <p>Un blog où je partage mes idées et expériences= culinaires (plus ou moins réussi).</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Application de visualisation d'anime</h3>
          <p>un site qui permet de chercher et de verifier si son animé préféré est disponible sur chrunchyroll.</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Git Search</h3>
          <p>Application permettant de chercher et regarder les repositories des utilisateur de Github.</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Chat App</h3>
          <p>Application de chat simple permettant de discuter en petit commité</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-md">
          <h3 class="text-lg font-semibold mb-2">Weather App</h3>
          <p>Pour savoir le temps qu'il fait actuellement ou vous vivez (ou ailleurs)</p>
        </div>
      </div>
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