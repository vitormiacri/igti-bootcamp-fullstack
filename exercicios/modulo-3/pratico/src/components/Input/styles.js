import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;

  width: ${(props) => props.width};

  label {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0.5rem;
    color: #999;
    font-size: 0.9rem;
  }
`;

export const CustomInput = styled.input`
  border: none;
  border-bottom: 1px solid #999;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.color || '#222'};
  padding: 0.5rem 0;
  outline: none;

  &:focus {
    border-bottom: 1px solid #16a085;
  }
`;
