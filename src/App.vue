<template>
<div>
    <div class="container mt-5">
        <div class="margin-auto"> 
            <ShowErrors :errors="errors" v-if="errors.length" @close="errors = []"></ShowErrors>
            <div class="form-group">
                <label> Expression regulière</label>
                <div class="flex">
                  <input class="input" v-model="expression" placeholder="Entrer l'expression regulière">
                  <button class="btn btn-blue" @click="drawAutomate()"> Dessiner l'automate</button>
                  <button class="btn btn-blue" style="margin-left: 1rem" @click="startEvaluateWord()" v-if="!evaluating"> Evaluer un mot </button>
                </div>
            </div>
            <EvaluateWord 
            :expression="expression"
            v-if="evaluating" 
            @cancel="evaluating = false;"> </EvaluateWord>
            <Drawer v-if="drawing"> </Drawer>
        </div>
    </div>
</div>
</template>

<script>
// component
import Drawer from '@/components/Drawer.vue';
import EvaluateWord from '@/components/EvaluateWord.vue';
import ShowErrors from '@/components/ShowErrors.vue';

// modules
import { appErrors } from '@/modules/constants';

export default {
    name: 'App',
    components:{
      Drawer,
      EvaluateWord,
      ShowErrors
    },
    data(){
      return {
        evaluating: false,
        drawing: false,
        errors: [],
        expression: ''
      }
    },
    methods:{
      drawAutomate(){

        this.resetErrors();
      
        if(this.expression == ''){
          this.showErrors(appErrors['required_expression']);
        }else{
          this.resetAction();
          this.drawing = true;
        }
  
      },
      startEvaluateWord(){

        this.resetErrors();

        if(this.expression == ''){
          this.showErrors(appErrors['required_expression']);
        }else{
            this.resetAction();
            this.evaluating = true;
        }
     
      },
      resetAction(){
        this.drawing = false;
        this.evaluating = false;
      },
      showErrors(message){
        this.errors.push(message);
      },
      resetErrors(){
        this.errors = [];
      }

    }
}
</script>

<style>
</style>
