'use client';

import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { User } from '../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    users: User[];
}

export default function AnalyticsCharts({ users }: Props) {
    const [avgRatingData, setAvgRatingData] = useState<any>(null);

    useEffect(() => {
        const departmentRatings: { [dept: string]: number[] } = {};

        users.forEach((user) => {
            if (!departmentRatings[user.department]) {
                departmentRatings[user.department] = [];
            }
            departmentRatings[user.department].push(user.rating);
        });

        console.log(departmentRatings)
        const departments = Object.keys(departmentRatings);
        console.log("Dept", departments)

        const avgRatings = departments.map((dept) => {
            const ratings = departmentRatings[dept];
            const total = ratings.reduce((sum, val) => sum + val, 0);
            return total / ratings.length;
        });

        setAvgRatingData({
            labels: departments,
            datasets: [
                {
                    label: 'Avg Rating',
                    data: avgRatings,
                    backgroundColor: '#A67B5B'
                }
            ]
        });
    }, [users]);

    const bookmarkTrendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Bookmarks Added',
                data: [2, 4, 6, 3, 5],
                borderColor: '#A67B5B',
                backgroundColor: '#F7F1E1',
                fill: true
            }
        ]
    };

    return (
        <div className="space-y-8">
            <div className="bg-white dark:bg-[#1f1f1f] p-6 rounded-xl shadow text-[#4B3832] dark:text-white">
                <h2 className="text-lg font-semibold mb-4">
                    Department-wise Average Rating
                </h2>
                {avgRatingData && <Bar data={avgRatingData} />}
            </div>

            <div className="bg-white dark:bg-[#1f1f1f] p-6 rounded-xl shadow text-[#4B3832] dark:text-white">
                <h2 className="text-lg font-semibold mb-4">
                    Bookmark Trend
                </h2>
                <Line data={bookmarkTrendData} />
            </div>
        </div>
    );
}
