import { FC, JSX } from 'react';
import { BodyContainer } from "./style/styledComponents";


const Body:FC<{children: JSX.Element[]}> = ({ children }) => {
    return (
        <BodyContainer>
            { children }
        </BodyContainer>
    )
}

export default Body;