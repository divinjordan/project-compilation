<template>
<div>
    <div class="container mt-5">
        <div class="margin-auto"> 
            <div class="form-group">
                <label> Expression regulière</label>
                <input class="form-control" id="exp" placeholder="Entrer l'expression regulière">
            </div>
            <div class="mt-2">
                <button class="btn btn-primary" id="draw"> Dessiner l'automate </button>
            </div>

            <div class="form-group mt-4">
                <label for=""> Evaluer un mot</label>
                <input class="form-control" placeholder="Entrer le mot" id="word" />
            </div>
            <div class="mt-2">
                <button class="btn btn-success" id="check"> Evaluer </button>
            </div>
            <div id="result" class="mt-4 alert">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

.container{
  width: 80%;
  margin: auto;
  margin-top: 30px;
}


</style>
