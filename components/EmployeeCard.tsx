'use client';

import { User } from '@/types';
import { useRouter } from 'next/navigation';

export default function EmployeeCard({ user }: { user: User }) {
    const router = useRouter();

    return (
        <div className="bg-[#F7F1E1] rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 border border-[#DCC8A5]">
            <div className="flex items-center gap-4">
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#A67B5B]"
                />
                <div>
                    <h2 className="text-lg font-semibold text-[#3E2C1C]">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-[#5C4A3C]">{user.email}</p>
                </div>
            </div>

            <div className="mt-4 space-y-1 text-sm text-[#3E2C1C]">
                <p>
                    <span className="font-medium text-[#A67B5B]">Age:</span> {user.age}
                </p>
                <p>
                    <span className="font-medium text-[#A67B5B]">Department:</span> {user.department}
                </p>
                <p>
                    <span className="font-medium text-[#A67B5B]">Rating:</span>{' '}
                    <span className="text-[#D97706] font-semibold">⭐ {user.rating}/5</span>
                </p>
            </div>

            <div className="flex justify-between mt-4 text-sm font-medium space-x-2">
                <button
                    onClick={() => router.push(`/employee/${user.id}`)}
                    className="px-3 py-1 rounded-full cursor-pointer bg-[#A67B5B]/10 text-[#A67B5B] hover:bg-[#A67B5B]/20 transition"
                >
                    View
                </button>
                <button
                    className="px-3 py-1 rounded-full cursor-pointer bg-[#3E2C1C]/10 text-[#3E2C1C] hover:bg-[#3E2C1C]/20 transition"
                >
                    Bookmark
                </button>
                <button
                    className="px-3 py-1 rounded-full cursor-pointer bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 transition"
                >
                    Promote
                </button>
            </div>


        </div>
    );
}
