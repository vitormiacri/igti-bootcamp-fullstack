import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  margin-right: 2rem;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) translateX(5px);
    transition: all 0.2s;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Installment = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const Content = styled.div`
  color: ${(props) => (props.positive ? 'red' : 'green')};
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 1.2rem;

  p {
    margin: 0.5rem;

    &:last-of-type {
      color: ${(props) => (props.positive ? 'red' : 'cornflowerblue')};
    }
  }
`;
