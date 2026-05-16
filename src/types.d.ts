export interface User {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    role: 'user' | 'editor' | 'admin';
}

export interface UserMutation {
    name: string;
    email: string;
    isActive: boolean;
    role: string;
}