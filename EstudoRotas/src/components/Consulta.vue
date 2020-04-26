<template>
    <div>
            <div id="geral">
                <div id="Painel"> 
                    <h2>Consulta</h2>   
                    <div id="divInput">
                        <input type="text" placeholder="Digite a placa do veiculo.." v-model="dadosPlaca"/>
                    </div>
                <button id="BtnConsulta" @click="navegar">Consultar</button>
                </div>
        </div> 
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            dadosPlaca: '',
            verificar: false
        }
    }, methods: {
        navegar: function(){
            for(var i=0; i< this.$store.state.arreyDados.length; i++){
                if(this.dadosPlaca == this.$store.state.arreyDados[i].PLACA){
                    this.$store.commit('arrey', {
                        KEY: this.$store.state.arreyDados[i].indice,

                        //INFO DO PROPRIETARIO
                        IMG: this.$store.state.arreyDados[i].IMG,
                        NOMEPROP: this.$store.state.arreyDados[i].NOMEPROP,
                        CPF: this.$store.state.arreyDados[i].CPF,
                        SEXO: this.$store.state.arreyDados[i].SEXO,
                        DATANASC: this.$store.state.arreyDados[i].DATANASC,
                        NASCIONALI: this.$store.state.arreyDados[i].NASCIONALI,

                        //INFO DO VEICULO
                        ANO: this.$store.state.arreyDados[i].ANO,
                        COR: this.$store.state.arreyDados[i].COR,
                        PORTA: this.$store.state.arreyDados[i].PORTA,
                        COMBUSTIVEL: this.$store.state.arreyDados[i].COMBUSTIVEL,
                        POTENCIA: this.$store.state.arreyDados[i].POTENCIA,  
                        MODELOVEIC: this.$store.state.arreyDados[i].MODELOVEIC,
                        RENAVAN: this.$store.state.arreyDados[i].RENAVAN,
                        PLACA: this.$store.state.arreyDados[i].PLACA,
                        LICENCIADO: this.$store.state.arreyDados[i].LICENCIADO,

                        //INFO DA MULTA
                        LOCALIDADE: this.$store.state.arreyDados[i].LOCALIDADE,
                        DATAHORA: this.$store.state.arreyDados[i].DATAHORA,
                        TIPO: this.$store.state.arreyDados[i].TIPO,
                        PONTO: this.$store.state.arreyDados[i].PONTO,
                        VALOR: this.$store.state.arreyDados[i].VALOR,
                    })
                   if(this.$store.state.arreyDados[i].VEL_MAXIMA){
                       this.$store.commit('arrey', {
                           VEL_MAXIMA: this.$store.state.arreyDados[i].VEL_MAXIMA,
                           VELOINFRA: this.$store.state.arreyDados[i].VELOINFRA
                       })
                   }
                    this.verificar = true
                    this.$router.push('PainelDados')
                }
            }
            if(this.verificar == false){
                alert('PLACA NÃO ENCONTRADA')
            }  
        }
    }
}
</script>

<style>
    #geral {
        display: flex;
        justify-content: center;
    }
    #Painel {
        box-shadow: 2px 2px 8px rgb(219, 211, 211);
        border-radius: 8px;
        background-color: #fff;
        width: 47%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: -700px;
    }
    #divInput {
        border: 1px solid rgb(189, 96, 231);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 230px;
        height: 36px;
        margin-top: 80px;
    }
    input {
        outline: none;
        border: none;
        border-radius: 10px;
        height: 28px;
        width: 220px;
        font-variant-caps: small-caps;
    }
    #BtnConsulta{
        color: #fff;
        margin-top: 117px;
        height: 45px;
        width: 100px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        background: #DC2424;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    #BtnConsulta:hover {
        transition: all 0.50s;
        width: 855px;
    }
    #divInput:hover {
        height: 50px;
        width: 260px;
        transition: all 0.50s;
    }
</style>