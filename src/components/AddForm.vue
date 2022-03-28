<template>
  <div>
      <form @submit.prevent>
          <h4>Добавить животное</h4>
          <label for="type">Вид: </label>
          <select v-model="add_baby.type" id="type">
              <option value="cow">Корова</option>
              <option value="rabbit">Кролик</option>
              <option value="sheep">Овца</option>
          </select>
          <input v-model="add_baby.name" type="text" placeholder="Имя">
          <input v-model="add_baby.weight" type="text" placeholder="Вес">
          <input v-model="add_baby.color" type="text" placeholder="Цвет">
          <input v-model="add_baby.sex" type="text" placeholder="Пол">
          <button @click="sendBaby">Отправить</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            add_baby: {
                name: null, weight: null, color: null, sex: null, type: null
             }
            }
},
    methods:{
        sendBaby(){
            if(!this.add_baby.name || !this.add_baby.weight || !this.add_baby.color || !this.add_baby.sex || !this.add_baby.type){
                alert("Не введены данные!");
            }
            else{
            try{axios.post('https://demo-api.vsdev.space/api/farm/baby', this.add_baby)}
            catch(error){console.log(error);}
            alert("Добавлено!");
            location.reload();
            }
            
            
            
    }
}
}
</script>

<style scoped>
    form{
        display:flex;
        flex-direction: column;
        gap:10px;
    }

</style>