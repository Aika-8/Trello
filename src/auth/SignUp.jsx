import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import RightPhoto from "../assets/images/rightImage.webp";
import LeftPhoto from "../assets/images/leftImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const SignUp = () => {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("email") || "";
  const { setEmail } = useAuth();
  const location = useLocation();
  const mode = new URLSearchParams(location.search).get("mode");
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      email: storedEmail,
    },
  });
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (mode === "signUp" && storedEmail) {
      setValue("email", storedEmail);
    }
    if (mode === "signIn") {
      localStorage.removeItem("email");
      setValue("email", "");
    }
  }, [mode, setValue]);

  const onSubmit = (data) => {
    if (mode === "signUp") {
      localStorage.setItem("email", data.email);
    }
    setEmail(data.email);
    reset();
    navigate("/layout");
  };
  return (
    <StyledSection>
      <WrapperImage>
        <StyledImg src={LeftPhoto} alt="" />
      </WrapperImage>
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography>
          <StyledLogo />
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledH5>Зарегистрируйтесь чтобы продолжить</StyledH5>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Обязательное поле",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный email",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                onChange={(e) => {
                  field.onChange(e); // обновляем форму
                  localStorage.setItem("email", e.target.value); // сохраняем в localStorage
                }}
                label="Введите ваш адрес электронной почты"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  width: "320px",
                  "& .MuiInputBase-root": {
                    height: "36px",
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
            )}
          />
          <StyledPTag>
            Регистрируясь, я соглашаюсь с {""}
            <a>
              Условиями <br /> использования продуктов Cloud{" "}
              <Icons.Confidence />
            </a>{" "}
            {""}
            и принимаю <br />
            <a>
              Политику конфиденциальности Atlassian <Icons.Confidence />
            </a>
            .
          </StyledPTag>
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
            Зарегистрироваться
          </Button>
        </StyledForm>
        <StyledTextContinue>Или продолжить с помощью</StyledTextContinue>
        <Box>
          <StyledLi>
            <Icons.Google />
            <span>Google</span>
          </StyledLi>
          <StyledLi>
            <Icons.Microsoft />
            <span>Microsoft</span>
          </StyledLi>
          <StyledLi>
            <Icons.Apple />
            <span>Apple</span>
          </StyledLi>
          <StyledLi>
            <Icons.SlackLogo />
            <span>Slack</span>
          </StyledLi>
          <StyledTextSigIn>Уже есть аккаунт Atlassion? Войти</StyledTextSigIn>
        </Box>
        <Box sx={{ borderTop: "1px solid  rgb(193, 199, 208)" }}>
          <StyledIconAtlassition />
          <StyledPTag style={{ textAlign: "center" }}>
            Один аккаунт для Trello, Jira, Confluence и {""}
            <a>
              не только <Icons.Confidence />.
            </a>
          </StyledPTag>
          <StyledPTag
            style={{ color: "#44546f", textAlign: "center", marginTop: "10px" }}
          >
            Для защиты сайта используется система reCAPTCHA. Кроме <br /> того,
            действуют положения
            <a>
              Политики конфиденциальности <Icons.Confidence />
            </a>
            <br />и{" "}
            <a>
              Условий использования Google <Icons.Confidence />.
            </a>
          </StyledPTag>
        </Box>
      </Paper>
      <WrapperImage>
        <StyledImg src={RightPhoto} alt="" />
      </WrapperImage>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px 100px;
`;
const WrapperImage = styled.div`
  width: 400px;
  height: 30vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: #9ab6ed;
  border-radius: 8px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 60%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 60%,
    transparent 100%
  );
  opacity: 0.8;
`;
const StyledLogo = styled(Icons.Logo)`
  width: 117px;
  height: 40px;
`;
const StyledH5 = styled.h5`
  font-size: 16px;
  color: #173b4d;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const StyledPTag = styled.p`
  text-align: left;
  font-size: 12px;
  color: #173b4d;
  a {
    color: #0c66e4;
    text-decoration: underline;
    cursor: pointer;
  }
  ${Icons.Confidence} {
    width: 10px;
    height: 10px;
  }
`;
const StyledTextContinue = styled.p`
  color: #6f6e6e;
  font-weight: 600;
`;
const StyledLi = styled.li`
  width: 320px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid rgb(193, 199, 208);
  border-radius: 3px;
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(244, 242, 242);
  }
`;
const StyledTextSigIn = styled.p`
  font-size: 14px;
  color: #0c66e4;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const StyledIconAtlassition = styled(Icons.Attlassion)`
  width: 142px;
  height: 24px;
  margin-top: 5%;
`;
