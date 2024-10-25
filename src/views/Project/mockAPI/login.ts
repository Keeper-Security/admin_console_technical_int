import loginData from '../data/userLoginsFromServer.json';

type LoginType = (username: string, password: string) => boolean;

export const login: LoginType  = (username, password) => {
    return loginData.filter((user) => user.email === username && user.password === password).length === 1;
}
