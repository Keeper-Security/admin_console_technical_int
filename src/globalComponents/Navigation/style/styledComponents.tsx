import styled from "styled-components";
import { BLACK, GRAY } from "../../../style/colors";

export const NavContainer = styled.div`
    width: 240px;
    min-width: 240px;
    height: calc(100vh - 80px);
    background: ${GRAY.navigation};
    color: ${BLACK.primary};
    padding: 15px 10px;
    box-sizing: border-box;
    border-right: 1px solid ${GRAY.border};
`;

export const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const NavItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const NavItemIcon = styled.div`
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavItemText = styled.div`
    font-size: 20px;
`;
