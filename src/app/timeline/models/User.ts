import { Repositories } from './Repositories';

export interface User {
    id: string;
    bio: string;
    login: string;
    name: string;
    avatarUrl: string;
    repositories: Repositories;
}
