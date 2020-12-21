<template>
    <div class="panel error error-panel">
        <ul>
            <li v-for="item in errors" :key="item">
                {{ item }}
            </li>
        </ul>
        <div>
            <button class="close-panel" @click="$emit('close')"> &times;</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"ShowErrors",
    props:{
        errors: Array
    }
}
</script>
<style scoped>
.error-panel{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.close-panel{
    background-color: rgba(255,0,0,0.8);
    cursor: pointer;
    font-size: 1.5rem;
    color:white;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 3px;
}
.close-panel:hover{
    background-color: red;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>