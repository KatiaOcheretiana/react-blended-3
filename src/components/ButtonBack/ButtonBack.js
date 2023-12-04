import { LinkBack, LinkNavBack } from './ButtonBack.styled';
import { FcUpLeft } from 'react-icons/fc';

export const ButtonBack = ({ to }) => {
  return (
    <LinkNavBack>
      <LinkBack to={to}>
        <FcUpLeft />
        return
      </LinkBack>
    </LinkNavBack>
  );
};
