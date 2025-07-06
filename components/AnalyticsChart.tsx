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
import { useTheme } from 'next-themes';

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
    const { theme } = useTheme();

    useEffect(() => {
        const departmentRatings: { [dept: string]: number[] } = {};

        users.forEach((user) => {
            if (!departmentRatings[user.department]) {
                departmentRatings[user.department] = [];
            }
            departmentRatings[user.department].push(user.rating);
        });

        const departments = Object.keys(departmentRatings);

        const avgRatings = departments.map((dept) => {
            const ratings = departmentRatings[dept];
            const total = ratings.reduce((sum, val) => sum + val, 0);
            return total / ratings.length;
        });

        setAvgRatingData({
            labels: departments,
            responsive: true,
            maintainAspectRatio: false,
            datasets: [
                {
                    label: 'Avg Rating',
                    data: avgRatings,
                    backgroundColor: '#A67B5B',
                },
            ],
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: theme === 'dark' ? 'white' : 'black',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: theme === 'dark' ? 'white' : 'black',
                        },
                        grid: {
                            color: theme === 'dark' ? 'white' : 'gray',
                        },
                    },
                    y: {
                        ticks: {
                            color: theme === 'dark' ? 'white' : 'black',
                        },
                        grid: {
                            color: theme === 'dark' ? 'white' : 'gray',
                        },
                    },
                },
            },
        });
    }, [users, theme]);


    const lineChartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: theme === 'dark' ? 'white' : 'black',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme === 'dark' ? 'white' : 'black',
                },
                grid: {
                    color: theme === 'dark' ? 'white' : 'gray',
                },
            },
            y: {
                ticks: {
                    color: theme === 'dark' ? 'white' : 'black',
                },
                grid: {
                    color: theme === 'dark' ? 'white' : 'gray',
                },
            },
        },
    };

    const bookmarkTrendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Bookmarks Added',
                data: [2, 4, 6, 3, 5],
                borderColor: '#A67B5B',
                backgroundColor: '#A67B5B',
                fill: true
            }
        ]
    };

    return (
        <div className="space-y-8">
            <div className={`p-6 rounded-xl shadow
    ${theme === 'light' ? 'bg-white text-[#4B3832]' : 'bg-[#1f1f1f] text-white'}
  `}>
                <h2 className="text-lg font-semibold mb-4">
                    Department-wise Average Rating
                </h2>
                {avgRatingData && <Bar data={avgRatingData} options={avgRatingData.options} />}
            </div>

            <div className={`p-6 rounded-xl shadow
    ${theme === 'light' ? 'bg-white text-[#4B3832]' : 'bg-[#1f1f1f] text-white'}
  `}>
                <h2 className="text-lg font-semibold mb-4">
                    Bookmark Trend
                </h2>
                <Line data={bookmarkTrendData} options={lineChartOptions} />
            </div>
        </div>
    );
}
