<template>
  <div class="container mx-auto mt-8 fade fade-container opacity-0">
    <h2 class="text-2xl font-semibold mb-4 text-purple-900">Mes Projets</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      <div class="bg-green-300 p-4 rounded-md relative justify-between bg-opacity-50">
        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/ToDos/">Portfolio</a>
        <p>Blog personnel de presentation de moi meme et mes projets (ce que vous regardez).</p>
        <div class=" flex flex-row  relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        </div>
      </div>

      <div class="bg-green-300 p-4 rounded-md relative justify-between bg-opacity-50">
        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/ToDos/">Taches à Faire</a>
      <!--  <img src="src\assets\Screen.png" alt="Portfolio Preview" class="w-full h-20 object-cover mb-2 rounded-md"> -->
        <p>Une application web simple pour gérer vos tâches quotidiennes.</p>
        <div class=" flex flex-row  relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        </div>
      </div>

      <div class="bg-green-300 p-4 rounded-md relative flex flex-col justify-between bg-opacity-50">
        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/Cooking/">Blog Personnel</a>
        <p>Un blog où je partage mes idées et expériences culinaires (plus ou moins réussi).</p>
        <div class=" flex flex-row  relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">mock</div>
        </div>
      </div>

      <div class="bg-green-300 p-4 rounded-md relative flex flex-col justify-between bg-opacity-50">
        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/Anime/">Application de recherche anime</a>
        <p>Un site qui permet de chercher et de vérifier si son animé préféré est disponible sur Crunchyroll.</p>
        <div class=" flex flex-row  relative">
        <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">React</div>
        <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">API</div>
        </div>
      </div>
      <div class="bg-green-300 p-4 rounded-md relative flex flex-col justify-between bg-opacity-50">

        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/Search/">Git Search</a>
        <p>Application permettant de chercher et regarder les repositories des utilisateurs de Github.</p>
        <div class=" flex flex-row n relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        </div>
      </div>
      <div class="bg-green-300 p-4 rounded-md relative flex flex-col justify-between bg-opacity-50">

        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/ChatApp/">Chat App</a>
        <p>Application de chat simple permettant de discuter en petit comité.</p>
        <div class=" flex flex-row  relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Firebase</div>
        </div>
      </div>

      <div class="bg-green-300 p-4 rounded-md relative flex flex-col justify-between bg-opacity-50">
        <a class="text-lg font-semibold mb-2" href="https://leo-mandala.github.io/WeatherReport/">Weather App</a>
        <p>Pour savoir le temps qu'il fait actuellement où vous vivez (ou ailleurs).</p>
        <div class=" flex flex-row relative">
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">API</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">Vue.js</div>
         <div class="self-end mr-2 mt-2 bg-indigo-500 rounded-full text-white py-1 px-2 text-xs font-semibold">TailwindCSS</div>
        </div>
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