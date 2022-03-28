<template>
  <div>
      <h1>Наши малыши</h1>
      <button @click="showModal" v-if="babiesIsLoaded">Создать</button>
      <modal-form v-model:show="modalVisible"><add-form/></modal-form>
      <baby-list :babies="babies" v-if="babiesIsLoaded"/>
      <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import BabyList from "@/components/BabyList"
import ModalForm from "@/components/ModalForm.vue"
import AddForm from "@/components/AddForm.vue"
import axios from "axios"
export default {
    components:{
        BabyList,
        ModalForm,
        AddForm,
    },

    data(){
        return{
            babies: [],
            babiesIsLoaded: false,
            modalVisible:false
        }
    },

    methods:{
        async getBabies(){
            
            try{
                const response = await axios.get("https://demo-api.vsdev.space/api/farm/baby")
                this.babies = response.data
            }
            catch(error){
                console.log(error)
            }
            finally{
                this.babiesIsLoaded = true
            }
        },
        showModal(){
            this.modalVisible = true;
        }
        
    },
    mounted() {
        this.getBabies()
  }
}
</script>

<style>

</style>