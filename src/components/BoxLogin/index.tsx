import * as S from "./style";
import logo from 'assets/imgs/avatares.png';

const BoxLogin = () => {
	return (
        <S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoImage src={logo} alt="Avatar" />
        </S.BoxLoginLogo>
        <S.BoxLoginForm>
  <input type="text" placeholder="E-mail" />
  <input type="password" placeholder="Senha" />
</S.BoxLoginForm>
        </S.BoxLogin>
         );
        };

export default BoxLogin;