// @ts-nocheck
import React, { useState, useEffect } from 'react'
import './style.css';
import capa  from '../../../assets/images/capa.jpg'
import air  from '../../../assets/images/air.jpg'

const Home: React.FC = () => {
  return(
    <>
    <div className="container">
      <div className="main">
        <div>
          <h1>Qualidade do ar, Umidade do ar, Medições que conscientizam...</h1>
          <h6>
            Dados efetivos, com exibições e previsões são necessários para mostrar como está a qualidade do ar hoje em dia, podendo ver resultados surpreendentes para todo tipo de ambiente, preze pelo bem estar seu e das pessoas ao seu redor!
          </h6>
        </div>
        <div className="column-image">
          <img src={capa} alt="Woman make searching" style={{width: '80%', borderRadius: 10}}/>
        </div>
      </div>
      <div className="box-new">
        <div className="container-image">
          <img src={air} style={{width: '100%'}}/>
          <div className="box-inter">
            <h1>
              O que é Qualidade do Ar?
            </h1>
            <h6>
              A qualidade do ar refere-se ao estado do ar em nosso ambiente e é determinada pela presença de poluentes como partículas (PM2.5 e PM10), ozônio (O3), dióxido de nitrogênio (NO2), dióxido de enxofre (SO2), monóxido de carbono (CO), entre outros.
              Esses poluentes podem ter origens naturais, como erupções vulcânicas, ou antropogênicas, como emissões de veículos e indústrias.
            </h6>
          </div>
        </div>
      </div>
      <div className="box-new2">
        <h1>Impacto e resultados da qualidade do ar</h1>
        <h6>

        </h6>
      </div>
    </div>
  </>
  );
};

export default Home
