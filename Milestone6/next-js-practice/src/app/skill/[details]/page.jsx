import React from "react";

const technologies = [
  {
    id: "tech-001",
    name: "HTML",
    fullName: "HyperText Markup Language",
    rating: 4.8,
    price: 1200,
  },
  {
    id: "tech-002",
    name: "CSS",
    fullName: "Cascading Style Sheets",
    rating: 4.7,
    price: 1500,
  },
  {
    id: "tech-003",
    name: "JavaScript",
    fullName: "JavaScript Programming Language",
    rating: 4.9,
    price: 2500,
  },
  {
    id: "tech-004",
    name: "React",
    fullName: "React JavaScript Library",
    rating: 4.9,
    price: 3000,
  },
  {
    id: "tech-005",
    name: "Next.js",
    fullName: "Next.js React Framework",
    rating: 4.8,
    price: 3500,
  },
  {
    id: "tech-006",
    name: "TypeScript",
    fullName: "TypeScript Programming Language",
    rating: 4.8,
    price: 2800,
  },
  {
    id: "tech-007",
    name: "Tailwind CSS",
    fullName: "Tailwind CSS Framework",
    rating: 4.7,
    price: 2200,
  },
  {
    id: "tech-008",
    name: "Node.js",
    fullName: "Node.js JavaScript Runtime",
    rating: 4.8,
    price: 3200,
  },
  {
    id: "tech-009",
    name: "MongoDB",
    fullName: "MongoDB NoSQL Database",
    rating: 4.6,
    price: 2700,
  },
  {
    id: "tech-010",
    name: "Git",
    fullName: "Git Version Control System",
    rating: 4.9,
    price: 1800,
  },
];

const TechnologyDetails = async ({ params }) => {
  const { details } = await params;
  const technology = technologies.find(
    (technology) => details === technology.id,
  );

  return (
    <div>
      <h1>Technology Details</h1>
      <p>{technology.id}</p>
      <p>{technology.name}</p>
      <p>{technology.fullName}</p>
      <p>{technology.rating}</p>
      <p>{technology.price}</p>
    </div>
  );
};

export default TechnologyDetails;
