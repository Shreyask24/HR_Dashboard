'use client'

import AnalyticsCharts from "@/components/AnalyticsChart";
import { getRandomDepartment, getRandomRating } from "@/lib/helpers";
import { User } from "@/types";
import { useEffect, useState } from "react";

export default function AnalyticsPage() {
    const [users, setUsers] = useState<User[]>([]);

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

    return (
        <div className="p-6 min-h-screen bg-[#F7F1E1] dark:bg-black text-[#4B3832] dark:text-white">
            <AnalyticsCharts users={users} />
        </div>
    );
}
