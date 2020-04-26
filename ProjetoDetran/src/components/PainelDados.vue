<template>
  <div id="geral">
      <div id="PainelDados">
          <ul>
               <div>
                   <button id="BtnInfo" @click="AbrirPainelProp"><h4>INFORMAÇÕES PROPRIETARIO / CNH</h4></button>
                    <div v-if="this.clickPainelProp == true" id="divPainel">
                    <div v-for="dados in dadosarrey" :key="dados.KEY" id="divIMG">
                        <span v-if="dados.IMG =='1'">
                            <img src="../assets/homem1.png">    
                        </span>
                        <span v-if="dados.IMG =='2'">
                            <img src="../assets/homem2.png">    
                        </span>
                        <span v-if="dados.IMG =='3'">
                            <img src="../assets/homem3.png">    
                        </span>
                        <span v-if="dados.IMG =='4'">
                            <img src="../assets/homem4.png">    
                        </span>
                        <span v-if="dados.IMG =='5'">
                            <img src="../assets/mulher.png">    
                        </span>
                    </div>
                        <div>
                            <h4>NOME</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.NOMEPROP}}</span>
                                </div>
                        </div>  
                          <div>
                            <h4>CPF</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.CPF}}</span>
                                </div>
                        </div> 
                          <div>
                            <h4>SEXO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.SEXO}}</span>
                                </div>
                        </div>
                          <div>
                            <h4>NASCIONALIDADE</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.NASCIONALI}}</span>
                                </div>
                        </div>       
                            <div>
                            <h4>DATA NASCIMENTO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.DATANASC}}</span>
                                </div>
                        </div> 
                    <button id="BtnFechar" @click="FecharProp">Fechar</button> 
                    </div>
                     <button id="BtnInfo" @click="AbrirPainelVeic"><h4>INFORMAÇÕES VEICULO / CRLV</h4></button>
                    <div v-if="this.clickPainelVeic == true" id="divPainel">
                        <div>
                            <h4>MODELO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.MODELOVEIC}}</span>
                                </div>
                        </div> 
                           <div>
                            <h4>COMBUSTIVEL</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.COMBUSTIVEL}}</span>
                                </div>
                        </div> 
                           <div>
                            <h4>PLACA</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.PLACA}}</span>
                                </div>
                        </div> 
                           <div>
                            <h4>RENAVAN</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.RENAVAN}}</span>
                                </div>
                        </div>    
                         <div>
                            <h4>LICENCIADO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    LICENCIADO <span>{{dados.LICENCIADO}}</span>
                                </div>
                        </div>   
                           <div>
                            <h4>ANO FABRICAÇÃO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.ANO}}</span>
                                </div>
                        </div>  
                           <div>
                            <h4>COR</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.COR}}</span>
                                </div>
                        </div>  
                           <div>
                            <h4>POTENCIA</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.POTENCIA}}</span>
                                </div>
                        </div> 
                           <div>
                            <h4>PORTAS</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.PORTA}}</span>
                                </div>
                        </div> 
                        <button id="BtnFechar" @click="FecharVeic">Fechar</button>   
                    </div>
                    <button id="BtnInfo" @click="AbrirPainelMulta"><h4>MULTAS</h4></button>
                    <div v-if="this.clickPainelMulta == true" id="divPainel">
                         <div>
                            <h4>LOCAL OCORRIDO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.LOCALIDADE}}</span>
                                </div>
                        </div>  
                        <div>
                            <h4>DATA / HORA</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.DATAHORA}}</span>
                                </div>
                        </div>  
                           <div>
                            <h4>TIPO INFRAÇÃO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.TIPO}}</span>
                                </div>
                        </div> 
                           <div>
                            <h4>PONTUAÇÃO</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    <span>{{dados.PONTO}}</span>
                                </div>
                        </div> 
                         <div id="divVEL">
                    <div v-for="dados in dadosarrey" :key="dados.KEY">     
                        <a v-if="dados.VEL_MAXIMA >0">
                            <h4>VELOCIDADE MÁXIMA</h4>
                            <span id="Dados">{{dados.VEL_MAXIMA}} KM / hr</span>
                        </a>
                    </div>
                      <div v-for="dados in dadosarrey" :key="dados.KEY">     
                        <a v-if="dados.VEL_MAXIMA >0">
                            <h4>VELOCIDADE PERCORRIDA</h4>
                            <span id="Dados">{{dados.VELOINFRA}} KM / hr</span>
                        </a>
                    </div>
               </div> 
                      <div>
                            <h4>VALOR TOTAL</h4>
                                <div id="Dados" v-for="dados in dadosarrey" :key="dados.KEY">
                                    R$<span>{{dados.VALOR}}</span>
                                </div>
                        </div> 
                    <button id="BtnFechar" @click="FecharMulta">Fechar</button> 
                    </div>
                </div>              
          </ul>
          <button id="BtnReturn" @click="retornarConsulta">Nova Consulta</button>
      </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            clickPainelProp: false,
            clickPainelVeic: false,
            clickPainelMulta: false
        }
    },
    computed: {
        dadosarrey: function(){
            return this.$store.state.dadosSelecionado
        }
    }, methods: {
        retornarConsulta: function(){
            this.$store.state.dadosSelecionado = []
            this.$router.push('PainelConsulta')
        },
         AbrirPainelProp: function(){
            return this.clickPainelProp = true
        },
        FecharProp: function(){
            return this.clickPainelProp = false
        },
        AbrirPainelVeic: function(){
            return this.clickPainelVeic = true
        },
        FecharVeic: function() {
            return this.clickPainelVeic = false
        },
        AbrirPainelMulta: function(){
            return this.clickPainelMulta = true
        },
        FecharMulta: function(){
            return this.clickPainelMulta = false
        }
    }
}
</script>

<style>
#geral {
    margin-top: -50px;
}
#PainelDados {
    box-shadow: 3px 3px 20px rgb(238, 212, 212);
    border-radius: 8px;
    background-color: #fff;
    min-height: 200px;
    width: 52%;
    margin-top: 100px;
    }
img {
    height: 130px;
    width: 170px;
    border: 1px solid black;
    margin-left: -450px;
}
#divIMG {
    width: 100%;
    box-shadow: 2px 2px 2px rgb(224, 224, 253);
}
#Dados {
    padding: 3px;
    box-shadow: 2px 3px 2px rgb(224, 224, 253);
    min-width: 80px;
    cursor: not-allowed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: 12px;
    }
 span {
    margin-left: 2px;
 }
 #BtnReturn {
    margin-left: -5px;
    margin-top: 240px;
    color: #fff;
    margin-left: 30px;
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
 #BtnReturn:hover {
     transition: all 0.70s;
     width: 945px;
     margin-left: 2px;
 }
#divVEL {
    margin-left: 50px;
}
#BtnInfo {
    width: 800px;
    border: 1px solid rgb(243, 235, 235);
    background-color: #fff;
    outline: none;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgb(119, 119, 119);
    margin-top: 20px;
}
#BtnInfo:hover {
    transition: all 0.40s;
    color: #ffff;
    background: #DC2424;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#divPainel {
    margin-left: 70px;
    box-shadow: 4px 4px 10px rgb(80, 75, 75);
    min-height: 100px;
    width: 80%;
    padding: 10px;
}
#BtnFechar {
    border: none;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    outline: none;
    margin-top: 200px;
    margin-left: 45%;
    border-radius: 6px;
    color: #fff;
    height: 30px;
    width: 80px;
    justify-content: center;
    background: #DC2424;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#BtnFechar:hover {
    transition: all 0.50s ease-in-out;
    background: rgb(179, 44, 44);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, rgb(100, 117, 214), rgb(214, 73, 73));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgb(87, 104, 202), rgb(172, 49, 49)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>