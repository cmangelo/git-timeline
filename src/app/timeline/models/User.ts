import { Repo } from './Repo';

export interface User {
    id: string;
    bio: string;
    login: string;
    name: string;
    avatarUrl: string;
    repos: Array<Repo>;
}
