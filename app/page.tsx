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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>

      {loading ? (
        <p className="text-gray-500">Loading employees...</p>
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
