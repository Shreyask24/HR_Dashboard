import { useState } from "react";
import { User } from "../types";

export function useSearch(users: User[]) {
    const [searchText, setSearchText] = useState("");
    const [activeDepartments, setActiveDepartments] = useState<string[]>([]);
    const [activeRatings, setActiveRatings] = useState<number[]>([]);

    const toggleDepartment = (dept: string) => {
        if (activeDepartments.includes(dept)) {
            setActiveDepartments(activeDepartments.filter((d) => d !== dept));
        } else {
            setActiveDepartments([...activeDepartments, dept]);
        }
    };

    const toggleRating = (rating: number) => {
        if (activeRatings.includes(rating)) {
            setActiveRatings(activeRatings.filter((r) => r !== rating));
        } else {
            setActiveRatings([...activeRatings, rating]);
        }
    };

    const filteredUsers = users.filter((user) => {
        const text = searchText.toLowerCase();

        const matchesSearch =
            user.firstName.toLowerCase().includes(text) ||
            user.lastName.toLowerCase().includes(text) ||
            user.email.toLowerCase().includes(text) ||
            user.department.toLowerCase().includes(text);

        const matchesDepartment =
            activeDepartments.length === 0 || activeDepartments.includes(user.department);

        const matchesRating =
            activeRatings.length === 0 || activeRatings.includes(user.rating);

        return matchesSearch && matchesDepartment && matchesRating;
    });

    return {
        searchText,
        setSearchText,
        activeDepartments,
        toggleDepartment,
        activeRatings,
        toggleRating,
        filteredUsers,
    };
}
