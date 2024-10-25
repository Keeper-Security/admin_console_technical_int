import { VIEW } from "../../utils/const";
import { NavContainer, NavList, NavItem, NavItemIcon, NavItemText } from "./style/styledComponents";
import { MdChecklist, MdOutlineMap, MdOutlineContactSupport } from 'react-icons/md';

type NavigationProps = { setView: (view: VIEW) => void}

const Navigation: React.FC<NavigationProps> = ({ setView }) => {
    return (
        <NavContainer>
            <NavList>
                <NavItem onClick={() => setView(VIEW.ABOUT)}>
                    <NavItemIcon>
                        <MdOutlineMap />
                    </NavItemIcon>
                    <NavItemText>
                        About
                    </NavItemText>
                </NavItem>
                <NavItem onClick={() => setView(VIEW.PROJECT)}>
                    <NavItemIcon>
                        <MdChecklist />
                    </NavItemIcon>
                    <NavItemText>
                        Project
                    </NavItemText>
                </NavItem>
                <NavItem onClick={() => setView(VIEW.CONTACT)}>
                    <NavItemIcon>
                        <MdOutlineContactSupport />
                    </NavItemIcon>
                    <NavItemText>
                        Contact
                    </NavItemText>
                </NavItem>
            </NavList>
        </NavContainer>
    )
}

export default Navigation;