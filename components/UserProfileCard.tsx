import { User } from '../types';

interface Props {
    user: User;
    bio: string;
    performance: { year: number; rating: number }[];
}

export default function UserProfileCard({ user, bio, performance }: Props) {
    return (
        <div className="bg-white rounded-xl p-6 shadow mb-6 text-[#4B3832]">
            <div className="flex gap-6 items-center">
                <img
                    src={user.image}
                    alt={`${user.firstName}'s profile`}
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-xl font-semibold">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm">Age: {user.age}</p>
                    <p className="text-sm">Phone: {user.phone}</p>
                    <p className="text-sm">
                        Address: {user.address.address}, {user.address.city}
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <p className="font-medium mb-1">Bio:</p>
                <p className="text-sm leading-relaxed">{bio}</p>
            </div>

            <div className="mt-4">
                <p className="font-medium mb-1">Past Performance:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-sm">
                    {performance.map((entry) => (
                        <div
                            key={entry.year}
                            className="flex justify-between items-center px-3 py-2 rounded bg-[#F7F1E1]"
                        >
                            <span>{entry.year}</span>
                            <span className="text-yellow-500">{'⭐'.repeat(entry.rating)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
