<template>
<div>
    <div class="form-group">
        <label for=""> Entrer le mot </label>
        <div class="flex">
            <input class="input" placeholder="Entrer le mot" id="word" />
            <button class="btn btn-blue" @click="evaluate()"> Evaluer </button> 
            <button class="btn btn-gray" @click="$emit('cancel')"> Annuler </button>
        </div>
    </div>
    <div id="result" :class=" result ? 'success' : 'error'" v-if="showResult">
        {{ result ? "Le mot est accepte" : "Le mot n'est pas accepte"}}
    </div>
</div>
</template>
<script>
export default {
    name: "EvaluateWord",
    data(){
        return{
            showResult: false,
            result: false
        }   
    },
    methods:{
        evaluate(){
            this.showResult = true;
        }
    }
}
</script>
