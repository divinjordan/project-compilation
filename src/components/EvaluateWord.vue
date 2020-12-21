<template>
<div>
    <div class="form-group">
        <label for=""> Entrer le mot </label>
        <div class="flex">
            <input class="input" placeholder="Entrer le mot" v-model="word" />
            <button class="btn btn-blue" @click="evaluate()"> Evaluer </button> 
            <button class="btn btn-gray" @click="$emit('cancel')"> Annuler </button>
        </div>
    </div>
    <div class="panel" :class=" result ? 'success' : 'error'" v-if="showResult">
        {{ result ? "Le mot est accepté" : "Le mot n'est pas accepté"}}
    </div>
</div>
</template>
<script>
import { createMatcher } from '@/modules/regex';
export default {
    name: "EvaluateWord",
    props:{
        expression: String
    },
    data(){
        return{
            showResult: false,
            result: false,
            word: ''
        }   
    },
    methods:{
        evaluate(){
            const match = createMatcher(this.$props.expression);
            this.result = match(this.word);
            this.showResult = true;
        }
    }
}
</script>
