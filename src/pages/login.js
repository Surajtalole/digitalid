// pages/login.js
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <LoginForm />
        <div className="mt-4">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
