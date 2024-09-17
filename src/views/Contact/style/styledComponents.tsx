import styled from 'styled-components';
import { BLACK, BLUE, GRAY, GREEN } from '../../../style/colors';


export const ContactContainer = styled.div`
    padding: 30px;
    box-sizing: border-box;
`;

export const ContactTitle = styled.h1`
    margin-top: 0;
    color: ${BLACK.primary};
`;

export const ContactDescription = styled.p`
    color: ${BLACK.primary};
    font-size: 17px;
`;

export const ContactCards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
`;

export const ContactCard = styled.div`
    border: 1px solid ${BLACK.primary};
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-basis: 48%;
`;

export const ProfileImage = styled.div`
    height: 100px;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid ${BLUE.primary};

    img {
        width: 100px;
        height: 100px;
    }
`;

export const ContactInformation = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: ${BLACK.primary};
`;

export const ContactName = styled.div`
    font-size: 26px;
    font-weight: 600;
`;

export const ContactPosition = styled.div`
    font-size: 20px;
    color: ${GRAY.light1};
    margin-bottom: 15px;
`;

export const ContactEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    color: ${BLUE.primary};
    cursor: pointer;
`;

export const ContactEmailCopied = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${GREEN.primary};
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 15px;
`;
