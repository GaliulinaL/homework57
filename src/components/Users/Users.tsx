import React from 'react';
import UserItem from './UserItem';
import type { User } from '../../types';

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
    return (
        <div>
            <h5>Список пользователей</h5>
            {users.length === 0 ? <p className="text-muted">Пользователей пока нет</p> :
                users.map((user) => <UserItem key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;