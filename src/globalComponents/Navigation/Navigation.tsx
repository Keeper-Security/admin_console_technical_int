import { NavContainer, NavList, NavItem, NavItemIcon, NavItemText } from "./style/styledComponents";
import { MdChecklist, MdOutlineMap, MdOutlineContactSupport } from 'react-icons/md';


const Navigation = () => {
    return (
        <NavContainer>
            <NavList>
                <NavItem>
                    <a href="/about">
                        <NavItemIcon>
                            <MdOutlineMap />
                        </NavItemIcon>
                        <NavItemText>
                            About
                        </NavItemText>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="/project">
                        <NavItemIcon>
                            <MdChecklist />
                        </NavItemIcon>
                        <NavItemText>
                            Project
                        </NavItemText>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="/contact">
                        <NavItemIcon>
                            <MdOutlineContactSupport />
                        </NavItemIcon>
                        <NavItemText>
                            Contact
                        </NavItemText>
                    </a>
                </NavItem>
            </NavList>
        </NavContainer>
    )
}

export default Navigation;