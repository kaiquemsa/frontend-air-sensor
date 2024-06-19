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
              Somos uma startup jovem e nos propomos a democratizar a educação
              no Brasil através da robótica
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
                Somos a EdTech que está revolucionando a robótica educacional no
                Brasil
              </h1>
              <h6>
                Propagar a possibilidade de crianças e jovens despertarem suas
                habilidades através de nossas soluções inovadoras é o
                combustível que nos move a seguir inovando.
              </h6>
            </BoxInter>
          </ContainerImage>
        </BoxNew>
        <BoxNew2>
          <h1>Impacto e resultados nas escolas!</h1>
          <h6>
            Propagar conhecimento e despertar novas habilidades é um dos nossos
            objetivos e motivações. Em nossos projetos, sempre apreciamos o
            feedback e retorno de nossos parceiros e alunos.
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
              progressColor="#1f303f"
              textColor="#1f303f"
              size="150px"
              roundedStroke
            />
            <h6>Melhora no raciocínio lógico e interesse por exatas 😍</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={97}
              progressColor="#1f303f"
              textColor="#1f303f"
              size="150px"
              roundedStroke
            />
            <h6>Crianças de 5 a 11 anos que aprenderam a programar 🥰</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={100}
              progressColor="#1f303f"
              textColor="#1f303f"
              size="150px"
              roundedStroke
            />
            <h6>Crianças que querem seguir aprendendo robótica 😱</h6>
          </CircleProgress>
          <CircleProgress>
            <Circle
              progress={100}
              progressColor="#1f303f"
              textColor="#1f303f"
              size="150px"
              roundedStroke
            />
            <h6>Amaram o universo SamucaE da SamEdu! 🥳</h6>
          </CircleProgress>
        </CircleContainer>
        <BoxNew>
          <h1>Alcance SamEdu até o momento👨‍🚀</h1>
          <h6>Estamos em expansão contínua!</h6>
          <CardContainer>
            <CardHome>
              <h6>15+ Escolas</h6>
            </CardHome>
            <CardHome>
              <h6>1000+ Alunos</h6>
            </CardHome>
            <CardHome>
              <h6>10+ Projetos</h6>
            </CardHome>
          </CardContainer>
        </BoxNew>
        <BoxNew3>
          <h1>Apoio e parceiros</h1>
          <h6>
            Nossos projetos só acontecem por meio de nossos apoiadores e
            parceiros que acreditam em nosso trabalho e nossas soluções!
          </h6>
          <ParcContainer>
            <CardParc>
              <TitleContainer>
                <h1>AEAS</h1>
                <a href="https://www.unicef.org/brazil/" target="_blank">
                  {" "}
                  aeas.org.br
                </a>
              </TitleContainer>
              <ImgAEAS src={AEAS} />
            </CardParc>
            <CardParc>
              <TitleContainer>
                <h1>Mato Verde</h1>
                <a href="https://www.matoverde.mg.gov.br/" target="_blank">
                  {" "}
                  matoverde.mg.gov.br
                </a>
              </TitleContainer>
              <img
                src={MatoVerde}
                style={{ width: 120, height: 100, padding: "4px" }}
              />
            </CardParc>
          </ParcContainer>
          <ParcContainer>
            <CardParc>
              <TitleContainer>
                <h1>CEETIMAV</h1>
                <a
                  href="https://www.facebook.com/smeducacaoecultura"
                  target="_blank"
                >
                  {" "}
                  smeducacaoecultura
                </a>
              </TitleContainer>
              <img
                src={CEETIMAV}
                style={{ width: 90, height: 128, padding: "4px" }}
              />
            </CardParc>
            <CardParc>
              <TitleContainer>
                <h1>SEDETTUR</h1>
                <a
                  href="https://desenvolvimentoeconomico.sorocaba.sp.gov.br/"
                  target="_blank"
                >
                  {" "}
                  deveconomic
                </a>
              </TitleContainer>
              <img src={SEDITUR} style={{ width: 100, height: 128 }} />
            </CardParc>
          </ParcContainer>
        </BoxNew3>
        <Footer />
      </Container>
    </>
  );
};

export { Home };
