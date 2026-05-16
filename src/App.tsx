import {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import type {User} from './types';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-5">
                    <UserForm onSubmit={addUser}/>
                </div>
                <div className="col-md-7">
                    <Users users={users}/>
                </div>
            </div>
        </div>
    );
};

export default App;