import styled from 'styled-components';
import { BLACK } from '../../../style/colors';

export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    color: ${BLACK.primary};
    padding: 30px;
    box-sizing: border-box;

    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
    }
`;

export const AboutContainerText = styled.div`
    max-width: 900px;
    margin: 30px 0;
    font-size: 17px;
`;

export const AboutAreas = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

export const AboutArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${BLACK.primary};
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: 2px 2px 0 ${BLACK.primary};
    min-width: 135px;
`;

export const AreaIcon = styled.div`
    font-size: 40px;
`;

export const AreaTitle = styled.div`
    text-align: center;
    font-weight: 600;
`;