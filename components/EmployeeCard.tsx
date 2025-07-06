import { User } from '../types';
import { useBookmarks } from '../hooks/useBookmarks';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Props {
    user: User;
    context?: 'dashboard' | 'bookmarks';
}

export default function EmployeeCard({ user, context = 'dashboard' }: Props) {
    const { theme } = useTheme()

    const {
        addBookmark,
        removeBookmark,
        isBookmarked,
    } = useBookmarks();

    const alreadyBookmarked = isBookmarked(user.id);

    return (
        <div className={`${theme === 'light' ? 'bg-white text-[#4B3832]' : 'bg-[#1f1f1f] text-white border-2 border-[#4B3832]'} p-4 rounded-xl shadow`}>
            <div className="flex justify-between gap-4 mb-3">
                <div className="flex items-center gap-4 mb-3">
                    <img
                        src={user.image}
                        alt={user.firstName}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-xs font-bold md:text-sm md:font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-white'}">{user.email}</p>
                        <p className="text-md font-bold">{user.department}</p>
                        <p className="text-sm">
                            {'⭐'.repeat(user.rating)}
                        </p>
                    </div>
                </div>

                <div>
                    {context === 'dashboard' && !alreadyBookmarked ? (
                        <button
                            onClick={() => addBookmark(user)}
                            className={`text-sm px-3 py-1 cursor-pointer ${theme === 'light' ? 'text-[#4B3832]' : 'text-white'}  rounded`}
                        >
                            <Bookmark />
                        </button>)
                        :
                        (
                            <button
                                onClick={() => removeBookmark(user.id)}
                                className={`text-sm px-3 py-1 cursor-pointer ${theme === 'light' ? 'text-[#4B3832]' : 'text-white'}  rounded`}
                            >
                                <BookmarkCheck />
                            </button>
                        )}
                </div>
            </div>

            <div className="flex gap-2 flex-wrap">
                <a
                    href={`/employee/${user.id}`}
                    className="text-sm px-3 py-1 bg-[#A67B5B] text-white rounded"
                >
                    View
                </a>

                {context === 'bookmarks' && (
                    <>
                        <button
                            onClick={() => alert('Promoted')}
                            className="text-sm px-3 py-1 bg-green-600 text-white rounded"
                        >
                            Promote
                        </button>

                        <button
                            onClick={() => alert('Assigned')}
                            className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
                        >
                            Assign to Projects
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
