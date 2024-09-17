import styled from 'styled-components';
import { BLACK, WHITE } from '../../../style/colors';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: ${BLACK.primary};
    color: ${WHITE.primary};
    padding: 5px 15px;
    box-sizing: border-box;
    gap: 8px;

    img {
        max-height: 50px;
        object-fit: contain;
    }
`;

export const HeaderSubText = styled.div`
    font-size: 15px;
    color: red;
    text-transform: uppercase;
`;