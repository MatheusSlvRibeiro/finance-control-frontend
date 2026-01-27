export type AuthLoginResult = {
	success: boolean;
	message?: string;
	token?: string;
	access?: string;
	refresh?: string;
};
