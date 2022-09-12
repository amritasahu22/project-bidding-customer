interface User {
	username: string;
	userId: string;
	isAdmin: boolean;
}

const TOKEN_KEY = 'token';
const username = 'John';
const userId = '631f218e6561a183810a6d9c';
const isAdmin = false;
const currentUser: User = { username, userId, isAdmin };

export async function login(email?: string, password?: string) {
	//TODO: Call Authentication service to retrieve token
	// store it in local storage
	localStorage.setItem(TOKEN_KEY, JSON.stringify(currentUser));
}

export function getCurrentUser() {
	try {
		const stateFromStorage = localStorage.getItem(TOKEN_KEY);
		const currentUser: User = stateFromStorage && JSON.parse(stateFromStorage);
		return currentUser;
	} catch (ex) {
		return null;
	}
}
