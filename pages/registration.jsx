import { UserRegistrationForm } from 'components/index';

export default function Register() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <UserRegistrationForm />
        </div>
    );
}
