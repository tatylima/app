import logo from "assets/imgs/logo.png";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { NavItem } from "./types";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
}

const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <S.Menu>
      <nav>

        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (     //fazer um map em navItems para que todos os botões (atuais e futuros) possam ser renderizados de forma correta na página Home//.
        <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>             
				<S.MenuItemButton active={item.path === active}>
					{item.icon}  
          </S.MenuItemButton>
        </S.MenuItem>
        ))}      
      </nav>
      <S.MenuItemLogout>
        <Logout />
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
/*Vamos passar duas propriedades dentro do MenuItem que serão: a chave (key) recebendo o index e o active recebendo a validação da rota do item com a rota informada pelo componente.

*Além disso, item.icon serve para renderizar o ícone que configuramos dentro da interface NavItem*/