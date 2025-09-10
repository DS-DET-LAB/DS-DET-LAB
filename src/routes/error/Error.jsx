import { useNavigate } from 'react-router-dom';
import * as E from '@error/ErrorStyle';
import logo from '@assets/logo/logo-simple.svg';
import error from '@assets/common/404.svg';

function Error() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <E.Area>
        <E.Logo src={logo} alt="디지털교육공학센터 로고" />
        <E.Error src={error} alt="404" />
        페이지를 찾을 수 없습니다
        <E.Btn onClick={handleGoHome}>HOME</E.Btn>
      </E.Area>
    </>
  );
}

export default Error;
