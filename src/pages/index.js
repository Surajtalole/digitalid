// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-semibold mb-4">Welcome</h1>
        <div className="mt-4">
          <Link href="/login" className="block mb-2 text-blue-500">
          Login
          </Link>
          <Link href="/signup" className="block text-blue-500">
          Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
