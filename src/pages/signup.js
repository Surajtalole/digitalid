// pages/signup.js
import Link from 'next/link';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
        <SignupForm />
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
