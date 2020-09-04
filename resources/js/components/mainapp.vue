<template> 
  <div id="app">
      <div>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link :to="{name:'main'}" class="navbar-brand">도마 한라 비발디</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          사업안내
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link :to="{name:'page1'}" class="dropdown-item" >사업개요</router-link>
            <router-link :to="{name:'page3'}" class="dropdown-item" >오시는길</router-link>
        </div>
      </li>
       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          입지환경
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link :to="{name:'page5'}" class="dropdown-item" >입지환경</router-link>
            <router-link :to="{name:'page6'}" class="dropdown-item" >프리미엄</router-link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          입지환경
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link :to="{name:'page7'}" class="dropdown-item" >단지조경</router-link>
            <router-link :to="{name:'page8'}" class="dropdown-item" >동호수배치도</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'page2',params:{id:1}}" class="nav-link" >평면정보</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'page4'}" class="nav-link" >관심고객등록</router-link>
      </li>
    </ul>
  </div>
</nav>
      </div>
      <div id="body">
         <router-view></router-view>
      </div>
      <div id='footer' style="padding-top:60px;">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link :to="{name:'main'}" class="navbar-brand">도마 한라 비발디</router-link>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{name:'page3'}" class="nav-link" >오시는길</router-link>
      </li>
    </ul>
  </div>
</nav>
      </div>
  </div>
</template>

<style >
    #app {
        display:flex;
        min-height: 100vh;
        flex-direction: column;
    }

    #body {
        flex : 1;
    }
</style>