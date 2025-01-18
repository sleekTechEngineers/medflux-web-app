import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Geolocation is Revolutionizing Pharmacy Access",
    paragraph:
      "Discover how geolocation technology helps locate pharmacies and ensures timely access to essential medicines.",
    image: "/images/blog/blog1.jpg",
    author: {
      name: "Mr. Evaliz",
      image: "/images/blog/blog1.jpg",
      designation: "Technology Expert",
    },
    tags: ["pharmacy", "technology"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Top 5 Ways to Enhance Patient Support with Technology",
    paragraph:
      "Learn how pharmacies are leveraging technology to improve patient care and provide better support services.",
    image: "/images/blog/blog2.jpg",
    author: {
      name: "Raydos",
      image: "/images/blog/blog2.jpg",
      designation: "Health Writer",
    },
    tags: ["healthcare", "pharmacy"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Why Data Accuracy Matters in Pharmacy Systems in our life",
    paragraph:
      "Explore the importance of accurate data in geolocation-based pharmacy systems to ensure reliability and trust.",
    image: "/images/blog/blog7.jpg",
    author: {
      name: "Klan",
      image: "/images/blog/blog7.jpg",
      designation: "Pharmacy Consultant",
    },
    tags: ["data", "pharmacy"],
    publishDate: "2025",
  },
];

export default blogData;
