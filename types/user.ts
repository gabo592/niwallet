import { type Database } from './database';

type Table = Database['public']['Tables']['users'];

export type UserEntity = Table['Row'];
