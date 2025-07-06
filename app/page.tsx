'use client';

import { useEffect, useState } from 'react';
import { getRandomDepartment, getRandomRating } from '../lib/helpers';
import { User } from '../types';
import EmployeeCard from '../components/EmployeeCard';
import { useSearch } from '../hooks/useSearch';
import SearchFilterBar from '@/components/SearchFilter';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme()

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users?limit=20');
      const data = await res.json();

      const udpdatedUsers: User[] = data.users.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        image: user.image,
        department: getRandomDepartment(),
        rating: getRandomRating(),
      }));

      setUsers(udpdatedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);


  const {
    searchText,
    setSearchText,
    activeDepartments,
    toggleDepartment,
    activeRatings,
    toggleRating,
    filteredUsers,
  } = useSearch(users);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`p-6 ${theme === 'light' ? 'bg-[#F7F1E1] text-[#4B3832]' : 'bg-[#1f1f1f] text-white'} min-h-screen text-[#4B3832]`}>
      <SearchFilterBar
        searchText={searchText}
        setSearchText={setSearchText}
        activeDepartments={activeDepartments}
        toggleDepartment={toggleDepartment}
        activeRatings={activeRatings}
        toggleRating={toggleRating}
      />

      {loading ? (
        <p className="text-[#F7F1E1] flex justify-center items-center">Loading employees...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <EmployeeCard key={user.id} user={user} />
            ))
          ) : (
            <p className="text-[#A67B5B] text-sm">No users match your filters.</p>
          )}
        </div>
      )}
    </div>
  );
}
