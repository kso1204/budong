
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="padding:70px 0px 70px 0px;">
                <h1>오시는길</h1>
            </div>
        </div>
        <div class="card" width="100%">
        <div id="map" style="width:100%;height:300px;" >
        </div>
         <div class="card-body">
    <h5 class="card-title">도마 한라 비발디</h5>
    <p>    <a href="https://map.kakao.com/link/to/409221657" target='blank' class="btn btn-primary">길찾기</a> 
    </p>
    <p style="margin-top:20px;"> 
     <a href="tel:1544-7720" class="btn btn-primary">1544-7720</a>  </p>
  </div>
        </div>
    </div>
</template>

<script> export default { mounted() 
{ window.kakao && window.kakao.maps ?
this.initMap() : this.addScript(); }, methods :
 { initMap() { var container = document.getElementById('map'); 
 var options = { center: new kakao.maps.LatLng(36.3171851, 127.3688751), level: 3 };
  var map = new kakao.maps.Map(container, options); 

var marker = new kakao.maps.Marker({ position: map.getCenter() }); marker.setMap(map); },
 addScript() { const script = document.createElement('script'); /* global kakao */ 
 script.onload = () => kakao.maps.load(this.initMap); 
 script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d5a04f162984d0ce8f3bbed478c3b398';
  document.head.appendChild(script); } } } 
  </script>

