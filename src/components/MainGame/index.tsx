import { useEffect, useState } from "react";
import {
  ButtonBlue,
  ButtonRed,
  ButtonYellow,
  ButtonGreen,
  StartButton,
} from "../../styles/Buttons";
import { GameSettings } from "../../styles/Containers";
import { GeniusContainer, Genius } from "../../styles/Genius";
import { Score } from "../../styles/Score";

export default function MainGame() {
  const [order, setOrder] = useState<Number[]>([]);
  const [clickOrder, setClickOrder] = useState<Number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [greenSelected, setGreenSelected] = useState(false);
  const [redSelected, setRedSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);
  const [blueSelected, setBlueSelected] = useState(false);

  //0 - verde
  //1 - vermelho
  //2 - amarelo
  //3 - azul

  const shuffleOrder = (): void => {
    let colorOrder = Math.floor(Math.random() * 4);
    setOrder([...order, colorOrder]);
  };

  const toggleSelected = (color: Number): void => {
    const selectedTimeout: number = 400;
    switch (color) {
      case 0:
        setGreenSelected(!greenSelected);
        setTimeout(() => {
          setGreenSelected(false);
        }, selectedTimeout);
        break;
      case 1:
        setRedSelected(!redSelected);
        setTimeout(() => {
          setRedSelected(false);
        }, selectedTimeout);
        break;
      case 2:
        setYellowSelected(!yellowSelected);
        setTimeout(() => {
          setYellowSelected(false);
        }, selectedTimeout);
        break;
      case 3:
        setBlueSelected(!blueSelected);
        setTimeout(() => {
          setBlueSelected(false);
        }, selectedTimeout);
        break;
      default:
        break;
    }
  };

  const handleClick = (color: Number): void => {
    toggleSelected(color);
    setClickOrder([...clickOrder, color]);
  };

  // Inicia próximo nível caso o usuário acerte a sequência
  const nextLevel = () => {
    setScore(score + 1);
    setClickOrder([]);
    shuffleOrder();
  };

  // Reinicia o jogo
  const gameOver = () => {
    setScore(0);
    setClickOrder([]);
    setOrder([]);
    alert("Você errou a sequência, tente novamente!");
  };

  //Ilumina o botão gerado aleatoriamente
  useEffect(() => {
    if (order.length > 0) {
      for (let i in order) {
        setTimeout(() => {
          toggleSelected(order[i]);
        }, parseInt(i) * 1000);
      }
    }
  }, [order]);

  //Verifica se o usuário clicou na ordem certa
  useEffect(() => {
    if (clickOrder.length > 0) {
      if (clickOrder.every((color, index) => color === order[index])) {
        if (clickOrder.length === order.length) {
          setTimeout(() => {
            nextLevel();
          }, 1000);
        }
      } else {
        gameOver();
      }
    }
  }, [clickOrder]);

  return (
    <GeniusContainer>
      <Genius>
        <ButtonGreen
          selected={greenSelected}
          onClick={() => {
            handleClick(0);
          }}
        />
        <ButtonRed
          selected={redSelected}
          onClick={() => {
            handleClick(1);
          }}
        />
        <ButtonYellow
          selected={yellowSelected}
          onClick={() => {
            handleClick(2);
          }}
        />
        <ButtonBlue
          selected={blueSelected}
          onClick={() => {
            handleClick(3);
          }}
        />
      </Genius>
      <GameSettings>
        <StartButton
          onClick={() => {
            order.length === 0 && shuffleOrder();
          }}
          style={
            order.length > 0 ? { opacity: "0.5", cursor: "not-allowed" } : {}
          }
        >
          Iniciar jogo
        </StartButton>
        <Score>Pontuação: {score}</Score>
      </GameSettings>
    </GeniusContainer>
  );
}
