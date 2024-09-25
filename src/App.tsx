import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header.tsx';
import { blue } from '@radix-ui/colors';
import { ThemeProvider } from '@emotion/react';
import { Suspense } from 'react';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const theme = {
  colors: {
    ...blue,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Suspense fallback={<p />}>
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}

export default App;
