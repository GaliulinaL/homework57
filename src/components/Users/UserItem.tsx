import React from 'react';
import type { User } from '../../types';

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="mb-0">Роль: <strong>{user.role}</strong></p>
                <p className="mb-0 ${user.isActive ? 'text-success' : 'text-danger'}">
                    {user.isActive ? 'Активен' : 'Неактивен'}
                </p>
            </div>
        </div>
    );
};

export default UserItem;