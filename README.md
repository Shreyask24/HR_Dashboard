# HR Performance Dashboard

[Live Demo](https://hr-dashboard-liard.vercel.app/) • [GitHub Repository](https://github.com/Shreyask24/HR_Dashboard)

A responsive HR management dashboard built using Next.js App Router, Tailwind CSS, and Context API.  
This application enables HR teams to view employee performance, manage bookmarks, and explore department-level analytics with a clean, corporate UI.

---

## Features

### Dashboard (`/`)
- Displays user cards fetched from `https://dummyjson.com/users?limit=20`
- Shows full name, email, age, department, and performance rating
- Includes actions: View, Bookmark, Promote

### Search and Filter
- Search bar to filter employees by name, email, or department
- Multi-select filters for departments & performance ratings

### Employee Details Page (`/employee/[id]`)
- Detailed view of an employee’s profile including:
  - Address, phone, mock bio, and mock past performance
- Tabbed layout: Overview, Projects, Feedback

### Bookmark Manager (`/bookmarks`)
- Displays bookmarked employees
- Options to remove, promote, or assign to project (UI-only)

### Analytics (`/analytics`)
- Bar chart: Average performance ratings per department (calculated)
- Line chart: Mocked monthly bookmark trend
- Built using Chart.js with real-time data integration

---

## UI and Accessibility

- Dark/Light mode toggle using Tailwind’s class-based theming
- Mobile-first responsive layout for all screen sizes
  
---

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- State Management: React Context API
- Charts: Chart.js (via react-chartjs-2)
- Custom Hooks: `useSearch`, `useBookmarks`
- Utility Libraries: `localStorage`, custom random data helpers

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Shreyask24/HR_Dashboard.git
```

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

---

## Screenshots
![image](https://github.com/user-attachments/assets/a97f918a-5e5a-4ee2-8fa0-539874d9ab37)
![image](https://github.com/user-attachments/assets/8b7ae102-cb47-47fa-82cc-7e9e524e3e64)
![image](https://github.com/user-attachments/assets/a9e3ce9e-3b78-4667-960c-6741fd68d011)




