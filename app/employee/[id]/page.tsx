'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import UserProfileCard from '@/components/UserProfileCard';
import TabPanel from '@/components/TabPanel';
import { User } from '@/types';
import { getMockBio, getPastPerformance } from '@/lib/mockDetails';

export default function EmployeeDetailPage() {
    const { theme } = useTheme();
    const params = useParams();

    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/users/${params.id}`);
                if (!res.ok) throw new Error('User not found');
                const data: User = await res.json();
                setUser(data);
            } catch (e) {
                setError(true);
            }
        };

        fetchUser();
    }, [params.id]);

    if (error) {
        return <div className="p-6 text-red-600 flex justify-center items-center">User not found.</div>;
    }

    if (!user) {
        return <div className="p-6 flex justify-center items-center">Loading...</div>;
    }

    const bio = getMockBio();
    const performance = getPastPerformance();

    return (
        <div
            className={`p-6 min-h-screen ${theme === 'light' ? 'bg-[#F7F1E1] text-[#4B3832]' : 'bg-[#1f1f1f] text-white'
                }`}
        >
            <UserProfileCard user={user} bio={bio} performance={performance} />
            <TabPanel />
        </div>
    );
}
