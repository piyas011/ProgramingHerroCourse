import BlogsPost from "../components/Post";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description:
        "Learn the basics of Next.js and build fast, modern web applications.",
      author: "John Smith",
      category: "Next.js",
      date: "2026-09-19",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Mastering JavaScript Arrays",
      description:
        "Learn how to use map, filter, find, reduce, and other powerful array methods.",
      author: "Sarah Johnson",
      category: "JavaScript",
      date: "2026-09-18",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Building Beautiful React Components",
      description:
        "Discover how to create reusable and maintainable React components.",
      author: "Michael Brown",
      category: "React",
      date: "2026-09-17",
      image: "/images/blog3.jpg",
    },
    {
      id: 4,
      title: "Modern CSS Techniques",
      description:
        "Explore Flexbox, Grid, animations, and responsive design techniques.",
      author: "Emily Davis",
      category: "CSS",
      date: "2026-09-16",
      image: "/images/blog4.jpg",
    },
    {
      id: 5,
      title: "The Future of Web Development",
      description:
        "Explore modern tools and technologies that are shaping the future of web development.",
      author: "David Wilson",
      category: "Web Development",
      date: "2026-09-15",
      image: "/images/blog5.jpg",
    },
    {
      id: 6,
      title: "How to Become a Frontend Developer",
      description:
        "A practical guide to learning HTML, CSS, JavaScript, React, and Next.js.",
      author: "Olivia Martinez",
      category: "Frontend",
      date: "2026-09-14",
      image: "/images/blog6.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogsPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;
