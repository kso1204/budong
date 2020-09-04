
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="padding:70px 0px 70px 0px;">
                <h1>관심고객리스트</h1>
            </div>
        </div>
        <div>
            <table class="table table-striped">
                <tr>
                    <td>이름</td>
                    <td>이메일</td>
                    <td>연락처</td>
                    <td>선호사항</td>
                    <td>우편번호</td>
                    <td>주소</td>
                    <td>등록일</td>
                </tr>
                <tr v-for="(d,i) in data" :key="i" v-if="data.length">
								<td>{{d.name}}</td>
								<td>{{d.email}}</td>
								<td>{{d.mobile}}</td>
								<td>{{d.likeType}}</td>
								<td>{{d.zone}}</td>
								<td>{{d.address}}</td>
								<td>{{d.created_at}}</td>
							</tr>
            </table>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                data:{},
            }
        },

        created(){
            axios.get('/api/get').then(response=>{
                this.data=response.data;

            }).catch(err=>{
                console.log(err);
            });
            
        }
    }
</script>