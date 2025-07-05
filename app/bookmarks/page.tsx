'use client';

import { useBookmarks } from '../../hooks/useBookmarks';
import EmployeeCard from '../../components/EmployeeCard';

export default function BookmarksPage() {
    const { bookmarks } = useBookmarks();

    return (
        <div className="p-6 min-h-screen bg-[#F7F1E1] text-[#4B3832]">
            {bookmarks.length === 0 ? (
                <p className="text-gray-500 flex justify-center items-center text-sm">
                    You haven’t bookmarked any employees yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookmarks.map((user) => (
                        <EmployeeCard key={user.id} user={user} context="bookmarks" />
                    ))}
                </div>
            )}
        </div>
    );
}
