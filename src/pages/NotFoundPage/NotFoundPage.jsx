import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
  font-size: 24px;
  color: #333;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;