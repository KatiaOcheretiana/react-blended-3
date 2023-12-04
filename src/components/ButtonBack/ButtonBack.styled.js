import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkNavBack = styled.div`
  width: 100px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  position: relative;
  top: 0;
  left: 60%;
  margin-bottom: 40px;
  margin-top: 0;
`;

export const LinkBack = styled(Link)`
  display: flex;
  gap: 10px;
  padding: 4px;
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
