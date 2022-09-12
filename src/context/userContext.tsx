import { createContext } from 'react';

export interface IUserContext {
	username: string;
	userId: string;
	isAdmin: boolean;
}

const UserContext = createContext<IUserContext | null>(null);
UserContext.displayName = 'UserContext';

export default UserContext;
