<template>
    <div id="GeralHome">
        <div id="divMenuFechado" v-if="this.Painel == false">
        <button id="BtnMenu" @click="Abrir"><h1>{{this.AbrirM}}</h1></button>
        </div>
        <div id="divConsultar" v-if="this.Painel">
            <div id="divMenuAberto">
                <button id="BtnMenu" @click="Fechar"><h1>{{this.FecharM}}</h1></button>
            </div>    
                <div id="PainelHome">
                <button id="BtnConst" @click="Consultar">Consultar</button>
            </div>
        </div>
    </div>      
</template>

<script>
export default {
    data: function() {
        return {
            Painel: false,
            AbrirM: '>>',
            FecharM: '<<'
        }
    },
methods: {
    Consultar: function(){
        this.$router.push('PainelConsulta')
    },
    Abrir: function(){
        return this.Painel = true
    },
    Fechar: function(){
        return this.Painel = false
    }
}
}
</script>

<style>
#GeralHome {
    width: 14%;
    margin-top: 30px;
}
#BtnMenu {
    float: right;
    height: 910px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #ffff;
    font-size: 20px;
    background-color: rgb(68, 68, 241);
    color: rgb(73, 73, 238);
    font-size: 1px;
    box-shadow: 8px 3px 8px rgb(126, 123, 123);
}
#divMenuFechado {
    display: flex;
    height: 910px;
    width: 50px;
    margin-left: -38px
}
#divMenuAberto {
    display: flex;
    align-items: center;
    width: 50px;
    margin-left: 170px;
}
#BtnMenu:hover {
    transition: all 0.60s;
    width: 50px;
    background-color: rgb(73, 73, 238);
    color: #fff;
    font-size: 17px;
}
#divConsulta {
   margin-top: -500px;
    display: flex;
    height: 890px;
}
#PainelHome {
    margin-left: -30px;
    margin-top: -910px;
    padding-top: 20px;
    height: 890px;
    width: 200px;
    box-shadow: 3px 3px 5px rgb(114, 113, 113);
}
#BtnConst {
    height: 50px;
    width: 100%;
    cursor: pointer;
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 1px 5px rgb(207, 201, 201);
}
#BtnConst:hover {
    transition: all 0.40s;
    background-color: rgb(235, 230, 230);
    border-right: 6px solid blue;
}
</style>