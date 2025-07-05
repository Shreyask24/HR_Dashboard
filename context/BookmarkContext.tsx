'use client';

import { createContext, useContext, useState } from 'react';
import { User } from '../types';

interface BookmarkContextType {
    bookmarks: User[];
    addBookmark: (user: User) => void;
    removeBookmark: (id: number) => void;
    isBookmarked: (id: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
    const [bookmarks, setBookmarks] = useState<User[]>([]);

    const addBookmark = (user: User) => {
        const alreadyBookmarked = bookmarks.some((u) => u.id === user.id);
        if (!alreadyBookmarked) {
            setBookmarks([...bookmarks, user]);
        }
    };

    const removeBookmark = (id: number) => {
        setBookmarks((prev) => prev.filter((u) => u.id !== id));
    };

    const isBookmarked = (id: number) => {
        return bookmarks.some((u) => u.id === id);
    };

    return (
        <BookmarkContext.Provider
            value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}

export function useBookmarkContext() {
    const context = useContext(BookmarkContext);

    if (!context) {
        throw new Error('useBookmarkContext must be used within a BookmarkProvider');
    }

    return context;
}
