import styled from '@emotion/styled';
import WealthLogo from '../assets/logo.png';
import { LinkButton } from '../components/common/Button.tsx'; // Assuming you have a logo component or image

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 600px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 2rem;
`;
const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Logo src={WealthLogo} alt="WealthHealth Logo" />
      <Title>Welcome to HRnet</Title>
      <Subtitle>
        This is the HRnet system, an internal application to manage employee records.
      </Subtitle>
      <ButtonContainer>
        <LinkButton to="/create-employee">Create Employee</LinkButton>
        <LinkButton variant="text" to="/employee">
          View Employees
        </LinkButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
