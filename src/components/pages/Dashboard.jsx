import React, { useState } from "react";
import Workspace from "../organisms/Workspace";
import Toolbar from "../organisms/Toolbar";
import Title from "../atoms/Title";
import Header from "../molecules/Header";
import SideBar from "../templates/SideBar";
import Board from "../molecules/Board";
import Card from "../organisms/Card";
import CardIcon from "../atoms/CardIcon";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import CardCreation from "../organisms/CardCreation";
import Marker from "../atoms/Marker";

import GlobalStyles from "../../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";

//svg images
import commentaryIcon from "../../assets/comments-solid.svg";
import descriptionIcon from "../../assets/file-lines-regular.svg";
import maximizeIcon from "../../assets/window-maximize-regular.svg";

// boards && cards dCardCreation
import boards from "../../data/database";

const Dashboard = () => {
  const [boardId, setBoardId] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showCreationCard = (boardKey) => {
    setIsVisible(!isVisible);
    isVisible ? (theme.boards.opacity = 1) : (theme.boards.opacity = 0.5);
    setBoardId(boardKey);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Grid col={12}>
          <Header>
            <Title>
              <h1>Kapple</h1>
            </Title>
          </Header>
          <Toolbar />
          <SideBar>
            <p>Dashboards</p>
            <ul>
              <li>Organization</li>
              <li>Project</li>
              <li>Study</li>
            </ul>
          </SideBar>
          <Workspace>
            {isVisible && (
              <CardCreation
                boardId={boardId}
                showCreationCard={showCreationCard}
              >
                <Button>
                  <button onClick={showCreationCard}>Fechar</button>
                </Button>
              </CardCreation>
            )}
            {boards.map((board) => (
              <Board key={board.key}>
                <Title>
                  <h3>{board.title}</h3>
                </Title>

                {/* // renderiza os cards dentro dos boards */}
                {board.cards.map((card) => (
                  <Card draggable key={card.key} background="#fff">
                    <Marker color={card.background} />
                    <Title>
                      <h4>{card.title}</h4>
                    </Title>
                    <img draggable="false" src={card.image} alt="" />
                    <CardIcon>
                      <img src={descriptionIcon} alt="" />
                      <img src={commentaryIcon} alt="" />
                      <img src={maximizeIcon} alt="" />
                    </CardIcon>
                  </Card>
                ))}
                <Button>
                  <button onClick={() => showCreationCard(board.key)}>
                    + Add new card
                  </button>
                </Button>
              </Board>
            ))}

            {/* Botão para criar novo board */}
            <Button>
              <button
                onClick={() => alert("Funcionalidade a ser implementada")}
              >
                + Add new board
              </button>
            </Button>
          </Workspace>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
