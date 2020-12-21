<template>
<div>
    <div class="container mt-5">
        <div class="margin-auto"> 
            <div class="form-group">
                <label> Expression regulière</label>
                <div class="flex">
                  <input class="input" id="exp" placeholder="Entrer l'expression regulière">
                  <button class="btn btn-blue" @click="drawAutomate()"> Dessiner l'automate</button>
                  <button class="btn btn-blue" style="margin-left: 1rem" @click="startEvaluateWord()" v-if="!evaluating"> Evaluer un mot </button>
                </div>
            </div>
            <EvaluateWord v-if="evaluating" @cancel="evaluating = false;"> </EvaluateWord>
            <Drawer v-if="drawing"> </Drawer>
        </div>
    </div>
</div>
</template>

<script>
import Drawer from '@/components/Drawer.vue';
import EvaluateWord from '@/components/EvaluateWord.vue'
export default {
    name: 'App',
    components:{
      Drawer,
      EvaluateWord
    },
    data(){
      return {
        evaluating: false,
        drawing: false,
      }
    },
    methods:{
      drawAutomate(){
        this.switchAction('drawAutomate');
      },
      startEvaluateWord(){
        this.switchAction('evaluateWord');
      },
      switchAction(name){
        this.drawing = false;
        this.evaluating = false;
        switch (name) {
          case 'evaluateWord':
            this.evaluating = true;
            break;
          case 'drawAutomate':
            this.drawing = true;
            break;
          default:
            break;
        }
      }
    }
}
</script>

<style>


</style>
