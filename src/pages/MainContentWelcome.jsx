import React from "react";
import styled from "styled-components";
import { EmailTodo, SlackTeam } from "../assets/images/image";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { postSignUp } from "../store/thunks/authThunk";
import { Link } from "react-router-dom";

export const MainContentWelcome = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    localStorage.setItem("email", data.email);
    dispatch(postSignUp(data));
    reset();
  };
  return (
    <StyledMain>
      <StyledTopBlock>
        <p>
          Ускорьте работу своих команд с помощью функций искусственного
          интеллекта (ИИ) Atlassian, 🤖 которые теперь доступны для всех
          пользователей Premium и Enterprise! <a>Узнайте больше.</a>
        </p>
      </StyledTopBlock>
      <WrapperBlockGpt>
        <StyledTopMainBlock>
          <h2>От сообщения к действию</h2>
          <p>
            Быстро превращайте сообщения из ваших любимых приложений в задачи,
            <br /> сохраняя все обсуждения и задачи в одном месте.
          </p>
        </StyledTopMainBlock>
        <div>
          <StyledBlock>
            <div>
              <img src={EmailTodo} alt="EmailTodo" />
            </div>
            <StyledLeftText>
              <p>МАГИЯ ЭЛЕКТРОННОЙ ПОЧТЫ</p>
              <p>
                Легко превращайте свои электронные письма в задачи! Просто
                отправьте их в папку «Входящие» Trello, и искусственный
                интеллект (ИИ) Atlassian превратит их в организованные задачи со
                всеми необходимыми ссылками.
              </p>
            </StyledLeftText>
          </StyledBlock>
          <StyledBlock>
            <StyledLeftText>
              <p>МАГИЯ ПРИЛОЖЕНИЯ ДЛЯ СООБЩЕНИЙ</p>
              <p>
                Нужно ответить на сообщение из Slack или Microsoft Teams?
                Отправьте его прямо на свою доску Trello! Интерфейс вашего
                любимого приложения позволяет сохранять сообщения, которые
                появляются в папке «Входящие» Trello, с краткими описаниями и
                ссылками, созданными искусственным интеллектом.
              </p>
            </StyledLeftText>
            <div>
              <img src={SlackTeam} alt="EmailTodo" />
            </div>
          </StyledBlock>
        </div>
      </WrapperBlockGpt>
      <StyledBottomBlock>
        <h2>Начните работу с Trello уже сегодня</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Введите ваш адрес электронной почты"
            type="email"
            {...register("email", { required: "Обязательное поле" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              width: "320px",
              "& .MuiInputBase-root": {
                height: "40px",
                fontSize: "13px",
                alignItems: "center",
              },
              "& input": {
                padding: "6px 8px",
                fontSize: "13px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
                top: "-6px",
              },
              "& .MuiInputLabel-shrink": {
                top: "0px",
              },
            }}
          />
          <Link to="/signUp?mode=signUp">
            <Button
              type="submit"
              sx={{
                width: "296px",
                height: "40px",
                color: "#ffffff",
                backgroundColor: "#0c66e4",
                textTransform: "initial",
                "&:hover": {
                  backgroundColor: "#0052CC",
                },
              }}
            >
              Зарегистрируйтесь - это бесплатно!
            </Button>
          </Link>
        </form>
        <p>
          By entering my email, I acknowledge the{" "}
          <a>Atlassian Privacy Policy</a>
        </p>
      </StyledBottomBlock>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const StyledTopBlock = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 250px;
  text-align: center;
  background-color: #deebff;
  a {
    color: #0c66e4;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: #073575;
    }
  }
`;
const WrapperBlockGpt = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c66e4;
  padding: 0px 50px;
`;
const StyledTopMainBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  top: 8%;
  h2 {
    color: #ffffff;
    font-size: 28px;
  }
  p {
    color: #ffffff;
    text-align: center;
  }
`;
const StyledBlock = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: relative;
  top: 15%;
  padding: 0px 50px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 50px;
  img {
    width: 456px;
    height: 247px;
  }
`;
const StyledLeftText = styled.div`
  width: 375px;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledBottomBlock = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10%;
  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }
  p {
    color: #091e42;
    a {
      color: #0c66e4;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #073575;
      }
    }
  }
`;
