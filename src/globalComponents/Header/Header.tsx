import { HeaderContainer, HeaderSubText } from './style/styledCompoonents';
import Logo from '../../assets/images/logo.png';


const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="logo" />
            <HeaderSubText>
                Technical Interview
            </HeaderSubText>
        </HeaderContainer>
    )
}

export default Header;