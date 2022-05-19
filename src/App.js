import React from "react";
import { FaStop, FaArrowCircleLeft, FaPlayCircle } from "react-icons/fa";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url("https://taisamaral.com.br/blog/wp-content/uploads/2020/03/meu-amigo-totoro-resenha-cine-coletivo.jpg");
    background-size: cover;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    

  }
`;
const ContadorContainer = styled.div`
  width: 100%;
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const ContadorBox = styled.div`
  width: 20vw;
  height: 26vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #454f6a;
  border-radius: 10px;
  border: 10px solid #ba5a66;
  color: #ba5a66;
  position: relative;
  top: 50px;
  h1 {
    font-size: 22px;
  }
`;
const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 4vw;
    height: 5vh;
    margin: 5px;
    background: #ba5a66;
    border: none;
    color: #fff;
  }
`;
export default class Counter extends React.Component {
  state = {
    number: 0
  };
  add = () => {
    const auto = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);

    this.stop = () => {
      clearInterval(auto);
    };
  };

  reset = () => {
    this.setState({
      number: 0
    });
  };
  componentDidUpdate() {
    document.title = this.state.number;
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <ContadorContainer>
          <ContadorBox>
            <h1> Meu amigo contador </h1>
            <h2>{this.state.number}</h2>
            <BoxButtons>
              <button onClick={this.add}>
                <FaPlayCircle />{" "}
              </button>

              <button onClick={this.reset}>
                <FaArrowCircleLeft />
              </button>
              <button onClick={this.stop}>
                <FaStop />
              </button>
            </BoxButtons>
          </ContadorBox>
        </ContadorContainer>
      </>
    );
  }
}
