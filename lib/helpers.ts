export const departments = ["Engineering", "HR", "Marketing", "Design", "Finance"];

export const getRandomDepartment = () => {
    return departments[Math.floor(Math.random() * departments.length)];
};

export const getRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
};
