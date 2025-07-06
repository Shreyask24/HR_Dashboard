'use client';

import { useTheme } from 'next-themes';
import { departments } from '../lib/helpers';

interface Props {
    searchText: string;
    setSearchText: (val: string) => void;
    activeDepartments: string[];
    toggleDepartment: (dept: string) => void;
    activeRatings: number[];
    toggleRating: (rating: number) => void;
}

export default function SearchFilterBar({
    searchText,
    setSearchText,
    activeDepartments,
    toggleDepartment,
    activeRatings,
    toggleRating,
}: Props) {
    const { theme } = useTheme()
    return (
        <div className={`${theme === 'light' ? 'bg-[#F7F1E1] text-[#4B3832]' : 'bg-[#1f1f1f] text-white border-2 border-[#4B3832]'} p-4 rounded-xl mb-6 shadow`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search by name, email, or department"
                    className="w-full md:w-1/3 px-4 py-2 rounded-md border border-[#A67B5B] focus:outline-none focus:ring-2 focus:ring-[#A67B5B] text-sm bg-white text-black placeholder:text-gray-400"
                />

                <div className="flex flex-wrap gap-2">
                    {departments.map((department) => {
                        const isSelected = activeDepartments.includes(department);

                        return (
                            <button
                                key={department}
                                onClick={() => toggleDepartment(department)}
                                className={`px-3 py-1 rounded-full border text-sm transition cursor-pointer ${isSelected
                                    ? 'bg-[#A67B5B] text-white'
                                    : 'bg-white text-[#A67B5B] border-[#A67B5B]'
                                    }`}
                            >
                                {department}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => {
                        const isSelected = activeRatings.includes(rating);

                        return (
                            <button
                                key={rating}
                                onClick={() => toggleRating(rating)}
                                className={`px-3 py-1 rounded-full border text-sm transition cursor-pointer ${isSelected
                                    ? 'bg-[#A67B5B] text-white'
                                    : 'bg-white text-[#A67B5B] border-[#A67B5B]'
                                    }`}
                            >
                                {rating} ⭐
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
