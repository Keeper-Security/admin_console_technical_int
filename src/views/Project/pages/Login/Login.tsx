import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { login } from '../../mockAPI/login';

const LoginWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormInputWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const handleLogin = (e: any) => {
        e.preventDefault();
        const loginResponse = login(email, password);

        // TODO: update redux

        if (loginResponse === true) {
            navigate('/dashboard');
        }
    }

    return (
        <LoginWrapper>
            <StyledForm onSubmit={handleLogin}>
                <FormInputWrapper>
                    <label>
                        Email
                    </label>
                    <input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </FormInputWrapper>
                <FormInputWrapper>
                    <label>
                        Password
                    </label>
                    <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </FormInputWrapper>
                <button type="submit">Login</button>
            </StyledForm>
        </LoginWrapper>
    );
};

export default Login;
