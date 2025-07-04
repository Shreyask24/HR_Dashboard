'use client';

import { useEffect, useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { getRandomDepartment, getRandomRating } from '@/lib/helpers';
import { User } from '@/types';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users?limit=20');
      const data = await res.json();

      const updatedUsers: User[] = data.users.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        image: user.image,
        department: getRandomDepartment(),
        rating: getRandomRating(),
      }));

      setUsers(updatedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F1E1] transition-colors duration-300 px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-extrabold text-[#3E2C1C]">
          HR Dashboard
        </h1>
      </div>

      {loading ? (
        <p className="text-[#5C4A3C] text-lg">Loading employees...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
