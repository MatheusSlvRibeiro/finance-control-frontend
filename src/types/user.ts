import type { ReactNode } from "react";

export interface User {
	id: string;
	name: string;
	email: string;
 	avatar: ReactNode;
}