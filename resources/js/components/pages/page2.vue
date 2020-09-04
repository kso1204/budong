
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="padding:70px 0px 30px 0px;">
                <h1 align="center">{{items[id-1]}}</h1>
            </div>
        </div>

        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="padding:0px 0px 70px 0px;">
                <ul class="nav nav-pills nav-fill">


                <li class="nav-item" v-for="(item,i) in items" :key="i" v-if="items.length" style="margin-right:20px;">
                    
                     <router-link :to="{ name:'page2', params:{id:(i+1)}}" class="nav-link" v-bind:class="{active: i==id-1}"> {{item}} </router-link>
                  
                </li>
             </ul>
            </div>
        </div>
        
            
        <div>
             <img v-bind:src="'/images/plane_'+id+'.jpg'" class="d-block w-100" v-bind:alt="'/images/plane_'+id+'.jpg'">   
        </div>
    </div>
</template>

<script>

export default {


    data(){

        return {
            id : 1,
            items : ['42㎡','49㎡A','49㎡B','59㎡A','59㎡B'],
        }
    },
    created(){
       this.fetchData()
    },

    methods:{
        fetchData(){  
            
                this.id=this.$route.params.id;

        }
    },

    watch :{
		'$route': 'fetchData'
	},

    
}

</script>