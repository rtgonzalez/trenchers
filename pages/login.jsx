import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="mt-[11rem]">
                <p>Welcome, {session.user.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }
    return (
        <div className="mt-[11rem]">
            <button onClick={() => signIn('google')}>
                Sign in with Google
            </button>
        </div>
    );
}
