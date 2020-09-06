import { User } from '../models/User.model';
import { Login } from '../models/login.model';

export const MOCK_ADMIN_USER: User = {
    id: 1001,
    firstname: 'Lionel',
    lastname: 'Messi',
    email: 'lionel.messi@mu.ac.in',
    password: 'Lionel@96'
}

export const MOCK_ADMIN_LOGIN_CREDS: Login = {
    username: 'admin',
    password: 'admin'
}
