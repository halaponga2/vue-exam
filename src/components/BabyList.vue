<template>
    <div class="d-inline-flex p-2 flex-wrap" style="gap: 50px;">
            <div class="card" style="width: 18rem;" v-for="baby in babies" :key="baby.id" >
                <img :src="require(`@/assets/${baby.type}_img.jpg`)" class="card-img-top img-thumbnail card__image" alt="card image">
                <div class="card-body">
                    <h5 class="card-title">{{baby.name}}</h5>
                    <p class="card-text">Вес: {{baby.weight}}</p>
                    <p class="card-text">Цвет: {{baby.color}}</p>
                    <p class="card-text">Пол: {{baby.sex}}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        babies:{}
    }
}
</script>

<style scoped>

</style>