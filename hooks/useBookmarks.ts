import { useBookmarkContext } from "@/context/BookmarkContext";

export const useBookmarks = () => {
    const { bookmarks, addBookmark, removeBookmark, isBookmarked } = useBookmarkContext();
    return { bookmarks, addBookmark, removeBookmark, isBookmarked };
};
