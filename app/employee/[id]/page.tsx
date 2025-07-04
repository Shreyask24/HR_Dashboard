import { getMockBio, getPastPerformance } from '../../../lib/mockDetails';
import UserProfileCard from '../../../components/UserProfileCard';
import TabPanel from '../../../components/TabPanel';

interface Params {
    params: { id: string };
}

export default async function EmployeeDetailPage({ params }: Params) {
    const res = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await res.json();

    const bio = getMockBio();
    const performance = getPastPerformance();

    return (
        <div className="p-6 bg-[#F7F1E1] min-h-screen text-[#4B3832]">
            <h1 className="text-3xl font-bold mb-6 text-[#A67B5B]">Employee Details</h1>
            <UserProfileCard user={user} bio={bio} performance={performance} />
            <TabPanel />
        </div>
    );
}
