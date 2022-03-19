import styled, { css, CSSProp } from 'styled-components';

export const LoginContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 64px;
    border-radius: 16px;
    background: #eaeaea;
    box-shadow: 0px 2px 4px rgba(28, 28, 40, 0.06);

    p {
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      border-radius: 8px;
      border: none;
      padding: 16px;
      margin-top: 8px;
    }

    button {
      width: 100%;
      padding: 16px 32px;
      background: black;
      border-radius: 8px;
      border: none;
      color: white;
      margin-top: 16px;
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 8px;
  
  p {
    color: #ff3333;
    font-size: 12px;
    font-weight: bold;
  }
`;
