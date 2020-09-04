
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="padding:70px 0px 70px 0px;">
                <h1>관심고객등록</h1>
            </div>
        </div>
        
        <form @submit.prevent="submit">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">이름</label>
      <input type="text" class="form-control" id="name" v-model="data.name" name="name">
      <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
    </div>
    
    <div class="form-group col-md-6">
      <label for="email">이메일</label>
      <input type="email" class="form-control" id="email" v-model="data.email" name="email">
      <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-2">
      <label for="zone">우편번호</label>
      <input type="text" class="form-control" id="zone" v-model="data.zone" name="zone">
      <div v-if="errors && errors.zone" class="text-danger">{{ errors.zone[0] }}</div>
    </div>
    
    <div class="form-group col-md-8">
      <label for="address">주소</label>
      <input type="text" class="form-control" id="address" v-model="data.address" name="address">
      <div v-if="errors && errors.address" class="text-danger">{{ errors.address[0] }}</div>
    </div>
    
    <div class="form-group col-md-2">
      <label for="name">검색</label>
      <Button type="primary" class="form-control" @click="open">검색</Button>
    </div>
  </div>

 <div class="form-row">
    <div class="form-group col-md-6">
      <label for="mobile">연락처</label>
      <input type="text" class="form-control" id="mobile" v-model="data.mobile" name="mobile" >
      <div v-if="errors && errors.mobile" class="text-danger">{{ errors.mobile[0] }}</div>
    </div>
    
    <div class="form-group col-md-6">
        
        <label for="name">선호사항</label>
            <div class="form-control">

                <div class="form-check form-check-inline " v-for="(item,i) in items" :key="i" v-if="items.length">
                    <input class="form-check-input" v-model="data.likeType" type="radio" name="customRadio" v-bind:id="'likeType'+i" v-bind:value="item" >
                    <label class="form-check-label" v-bind:for="'likeType'+i">{{item}}</label>
                </div>
            </div>
          </div>
    </div>
 <div class="form-row">
    <button type="submit" class="btn btn-primary">등록</button>
  </div>

    <div v-if="success" class="alert alert-success mt-3">
            등록 되었습니다.
        </div>

        <Modal 
        v-model="showModal">

           <DaumPostcode
      :on-complete=handleAddress
    />




             <div slot="footer">
			<Button type="error" @click="showModal=false">close</Button>	
            </div>
        </Modal>

</form>


    </div>
</template>


<script>

import DaumPostcode from 'vuejs-daum-postcode'


export default {
    data (){
        return {
             items : ['42㎡','49㎡A','49㎡B','59㎡A','59㎡B'],
             data:{},
             showModal:false,
             errors:{},
             success: false,
        }
    },

    methods:{
        open(){
            this.showModal = true
        },
        handleAddress(data){
               console.log(data);
                let fullAddress = data.address
                let extraAddress = ''
                if (data.addressType === 'R') {
                  if (data.bname !== '') {
                    extraAddress += data.bname
                  }
                  if (data.buildingName !== '') {
                    extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
                  }
                  fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
                }
               // console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
                this.data.address=fullAddress
                this.data.zone=data.zonecode
                this.showModal=false
                
            },

            submit() {
                this.errors = {};
                axios.post('/submit', this.data).then(response => {
                    alert('등록 되었습니다.!');
                    this.success = true
                    this.data = null;
                }).catch(error => {
                    if (error.response.status === 422) {
                    this.errors = error.response.data.errors || {};
                    this.success = false
                    }else{
                       this.errors = error.response.data.errors || {};
                       this.success = false
                    }
                });

                },

    },

    components:{
        DaumPostcode
    }
}

</script>