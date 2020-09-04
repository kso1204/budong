
<template>
<div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="height:628px;">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="height:628px;">
      <div class="carousel-item active">
        <img src="/images/main1.png" class="d-block w-100" alt="/images/main1.png">
      </div>
      <div class="carousel-item">
        <img src="/images/main2.png" class="d-block w-100" alt="/images/main2.png">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div>
    <div class="form-row" style="margin-top:30px; width:100%;">
    <div class="form-group col-md-3">
      
            <router-link :to="{name:'page5'}" class="nav-link"> 
            <img src="/images/M_con1_1.jpg" class="d-block w-100" alt="/images/M_con1_1.jpg"> </router-link>
    </div>

    <div class="form-group col-md-3">

      
      
            <router-link :to="{ name:'page2', params:{id:1}}" class="nav-link">
              <img src="/images/M_con1_2.jpg" class="d-block w-100" alt="/images/M_con1_2.jpg"> </router-link>
              
            

    </div>

    
    <div class="form-group col-md-3">
      
            <router-link :to="{name:'page4'}" class="nav-link"> 
             <img src="/images/M_con1_3.jpg" class="d-block w-100" alt="/images/M_con1_3.jpg"> </router-link>

    </div>

    <div class="form-group col-md-3">

      
            <router-link :to="{name:'page3'}" class="nav-link"> 
             <img src="/images/M_con1_4.jpg" class="d-block w-100" alt="/images/M_con1_4.jpg"></router-link>


    </div>

    

    </div>
  </div>

</div>
</template>
