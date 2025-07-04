'use client';

import { useState } from 'react';
import { getMockProjects, getMockFeedback } from '../lib/mockDetails';

export default function TabPanel() {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Projects', 'Feedback'];

    return (
        <div className="bg-white rounded-xl p-6 shadow text-[#4B3832]">
            <div className="flex gap-4 mb-4 border-b border-[#A67B5B]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 font-medium border-b-2 cursor-pointer transition ${activeTab === tab
                            ? 'border-[#A67B5B] text-[#A67B5B]'
                            : 'border-transparent text-gray-500 hover:text-[#A67B5B]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'Overview' && (
                <div className="text-sm">
                    This employee is a key contributor to the company’s goals and has consistently performed well.
                </div>
            )}

            {activeTab === 'Projects' && (
                <ul className="list-disc list-inside text-sm">
                    {getMockProjects().map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            )}

            {activeTab === 'Feedback' && (
                <div className="space-y-3 text-sm">
                    {getMockFeedback().map((item, index) => (
                        <div key={index} className="bg-[#F7F1E1] p-3 rounded">
                            <p>
                                <strong>{item.from}:</strong> {item.comment}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
