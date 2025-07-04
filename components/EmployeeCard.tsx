'use client';

import { User } from '@/types';
import { useRouter } from 'next/navigation';

interface Props {
    user: User;
}

export default function EmployeeCard({ user }: Props) {
    const router = useRouter();
    //   const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

    //   const bookmarked = isBookmarked(user.id);

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
                <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded-full" />
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm">Age: {user.age}</p>
                    <p className="text-sm">Dept: {user.department}</p>
                    <p className="text-sm">
                        Rating:{' '}
                        <span className="text-yellow-500">{'⭐'.repeat(user.rating)}</span>
                    </p>
                </div>
            </div>

            <div className="flex justify-between mt-4 text-sm">
                <button
                    onClick={() => router.push(`/employee/${user.id}`)}
                    className="text-blue-600 hover:underline"
                >
                    View
                </button>
                <button
                    //   onClick={() =>
                    //     bookmarked ? removeBookmark(user.id) : addBookmark(user)
                    //   }
                    className="text-yellow-600 hover:underline"
                >
                    Bookmark
                </button>
                <button className="text-green-600 hover:underline">Promote</button>
            </div>
        </div>
    );
}
