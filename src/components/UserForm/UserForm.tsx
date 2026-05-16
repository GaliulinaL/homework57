import React, {useState} from 'react';
import type {User, UserMutation} from '../../types';

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        isActive: false,
        role: 'user',
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    };

    const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setUser((prev) => ({...prev, [name]: checked}));
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            ...user,
            id: Math.random().toString(),
            role: user.role as 'user' | 'editor' | 'admin',
        });
        setUser({name: '', email: '', isActive: false, role: 'user'});
    };

    return (
        <form onSubmit={onFormSubmit} className="border p-3 rounded bg-light shadow-sm">
            <h5>Создать пользователя</h5>
            <div className="mb-3">
                <label className="form-label">Имя</label>
                <input name="name" value={user.name} onChange={onInputChange} className="form-control" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={user.email} onChange={onInputChange} className="form-control"
                       required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Роль</label>
                <select name="role" value={user.role} onChange={onInputChange} className="form-select">
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" name="isActive" checked={user.isActive} onChange={onCheckboxChange}
                       className="form-check-input" id="active"/>
                <label className="form-check-label" htmlFor="active">Активен</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Создать</button>
        </form>
    );
};

export default UserForm;