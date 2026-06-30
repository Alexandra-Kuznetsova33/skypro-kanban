import {
  NotFoundWrapper,
  Code,
  Message,
  HomeLink,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Code>404</Code>
      <Message>Страница не найдена</Message>
      <HomeLink to='/'>Вернуться на главную</HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;