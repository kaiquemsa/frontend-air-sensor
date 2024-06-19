import { Header } from "../../components/Header";
import { ButtonContact } from "../../components/ButtonContact";
import { Footer } from "../../components/Footer";
import { CardHome } from "../../components/CardHome";
import { CardParc } from "../../components/CardParc";
import Circle from "react-circle";

import React, { useEffect, useState } from "react";

import {
  Container,
  Main,
  ColumnImage,
  BoxNew,
  BoxInter,
  BoxNew2,
  CircleProgress,
  CircleContainer,
  CardContainer,
  BoxNew3,
  ContainerImage,
  ParcContainer,
  TitleContainer,
  ImgAEAS,
} from "./styles";

import HeaderImage from "../../assets/header-image.png";
import AEAS from "../../assets/AEAS.png";
import MatoVerde from "../../assets/MatoVerde.png";
import Man from "../../assets/manCp.png";
import CEETIMAV from "../../assets/CEETIMAV-removebg-preview.png";
import SEDITUR from "../../assets/SEDITUR-removebg-preview.png";

const Home: React.FC = () => {
  const [activyColor, setActivyColor] = useState(false);

  useEffect(function () {
    function posicionScroll() {
      if (window.scrollY > 10) {
        setActivyColor(true);
      } else {
        setActivyColor(false);
      }
    }
    window.addEventListener("scroll", posicionScroll);
  }, []);

  return (
    <>
      <Container>
        <Header action={activyColor} page="inicio" />
        <Main>
          <div>
            <h1>Olá! Bem-vindo.</h1>
            <h6>
              Somos uma startup jovem e nos propomos a encarar desafios
              no Brasil através de códigos
            </h6>
            <ButtonContact />
          </div>
          <ColumnImage>
            <img src={HeaderImage} alt="Woman make searching" />
          </ColumnImage>
        </Main>
        <BoxNew>
          <ContainerImage>
            <img src={Man} />
            <BoxInter>
              <h1>
                Somos a MADs que está revolucionando no
                Brasil
              </h1>
              <h6>
                Propagar a possibilidade de melhores de resultados 
                através de nossas soluções inovadoras é o
                combustível que nos move a seguir inovando.
              </h6>
            </BoxInter>
          </ContainerImage>
        </BoxNew>
        <BoxNew2>
          <h1>Impacto e resultados!</h1>
          <h6>
            Propagar conhecimento e despertar novas habilidades é um dos nossos
            objetivos e motivações. Em nossos projetos, sempre apreciamos o
            feedback.
          </h6>
          <h6>
            Abaixo você pode conferir os resultados que tivemos em nossas
            aplicações até o momento:
          </h6>
        </BoxNew2>
        <CircleContainer>
          <CircleProgress>
            <Circle
              progress={92}
              progressColor="#345995"
              textColor="#345995"
              size="150px"
              roundedStroke
            />
            <h6>Melhora no raciocínio lógico e interesse</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={97}
              progressColor="#345995"
              textColor="#345995"
              size="150px"
              roundedStroke
            />
            <h6>Resultados expressantes</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={100}
              progressColor="#345995"
              textColor="#345995"
              size="150px"
              roundedStroke
            />
            <h6>Oportunidades criadas de acordo</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={100}
              progressColor="#345995"
              textColor="#345995"
              size="150px"
              roundedStroke
            />
            <h6>Aprovaram os resultados</h6>
          </CircleProgress>
        </CircleContainer>
        <Footer />
      </Container>
    </>
  );
};

export { Home };
