export const getMockBio = () => {
    return "I'm a team player who enjoys building great software and learning new things every day.";
};

export const getPastPerformance = () => {
    const ratings = [];

    for (let i = 0; i < 5; i++) {
        const year = 2019 + i;
        const rating = Math.floor(Math.random() * 5) + 1;
        ratings.push({ year, rating });
    }

    return ratings;
};

export const getMockProjects = () => {
    return [
        "Employee Onboarding Portal",
        "Performance Review System",
        "Internal HR Chatbot",
    ];
};

export const getMockFeedback = () => {
    return [
        {
            from: "Manager",
            comment: "Consistent and reliable during Q2. Shows leadership qualities.",
        },
        {
            from: "Team Lead",
            comment: "Strong in collaboration. Takes ownership of technical challenges.",
        },
    ];
};
