import styled from "styled-components";
import { WHITE } from "../../../style/colors";

export const BodyContainer = styled.div`
    display: flex;
    width: 100vw;
    height: calc(100vh - 80px);
    background: ${WHITE.primary};

    > div:nth-child(2) {
        flex-grow: 1; 
    }
`;