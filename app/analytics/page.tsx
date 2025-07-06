'use client'

import AnalyticsCharts from "@/components/AnalyticsChart";
import { getRandomDepartment, getRandomRating } from "@/lib/helpers";
import { User } from "@/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnalyticsPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [mounted, setMounted] = useState(false);

    const { theme } = useTheme()


    useEffect(() => {
        const fetchUsers = async () => {
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
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`p-6 ${theme === 'light' ? 'bg-[#F7F1E1] text-[#4B3832]' : 'bg-[#1f1f1f] text-white'} min-h-screen text-[#4B3832]`}>
            <AnalyticsCharts users={users} />
        </div>
    );
}
