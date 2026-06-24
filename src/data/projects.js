/**
 * Add a new project by adding a new object to this array.
 * It will appear on the Home page (if featured: true) and on /projects,
 * with its own detail page at /projects/<slug>.
 */
export const projects = [
  {
    slug: "np-shop",
    title: "NP-Shop (Full Stack)",
    summary:
      "A complete, production-ready e-commerce platform featuring secure JWT authentication, high-performance server-synced carts, and real-world PayPal checkout integration.",
    description:
      "Built from the ground up to handle real-world challenges, NP-Shop bridges a responsive React frontend with a highly resilient Java Spring Boot API. The client leverages Zustand for global state management and a custom Axios instance for silent JWT refreshes, ensuring zero session interruptions. On the backend, a layered architecture securely manages role-based access, processes live PayPal webhooks, and utilizes Redis for rapid cart operations alongside Redisson for strict rate-limiting. The entire platform is fully deployed, showcasing a seamless end-to-end purchasing flow.",
    highlights: [
      "End-to-end custom JWT authentication with silent background token refreshes.",
      "High-performance shopping cart globally synchronized between Zustand (Client) and Redis (Server).",
      "Live PayPal SDK integration with secure, webhook-based payment verification and order expiry scheduling.",
      "Robust REST API built with Java 21, Spring Boot, and PostgreSQL.",
      "Advanced API protection utilizing Redisson-backed sliding window rate limiting (per IP/account).",
      "Fully deployed infrastructure utilizing Vercel for the frontend and containerized backend services."
    ],
    tags: [
      "Java 21", "Spring Boot", "React 18", "PostgreSQL", "Redis", 
      "Zustand", "Tailwind CSS", "Framer Motion", "PayPal SDK", "Docker"
    ],
    role: "Full Stack",
    status: "Live",
    liveUrl: "https://np-shop-web.vercel.app/",
    repoUrl: "https://github.com/julhariemaddin/np-shop-web", // Linking to the web repo as the primary entry point
    featured: true,
    previewType: "iframe",
  },
  {
    slug: "np-shop-api",
    title: "NP-Shop API",
    summary:
      "A backend for an e-commerce platform built to handle user authentication, shopping carts, rate limiting, and real PayPal checkouts.",
    description:
      "This is a REST API built with Java 21 and Spring Boot. I wanted to move past basic tutorials and build a system that deals with actual production challenges. It handles user accounts with role permissions, product categories, file uploads for images, and full order processing. The shopping cart stores data directly in Redis so it is fast, and the whole application sits behind a custom JWT authentication layer. I also configured a sliding window rate limiter using Redisson to prevent endpoint abuse.",
    highlights: [
      "Layered architecture: Controller -> Service -> Repository -> PostgreSQL",
      "Custom JWT auth with refresh tokens stored in Redis",
      "Redisson backed rate limiting with per account, per IP, and per endpoint buckets",
      "PayPal checkout flow with webhook based payment confirmation",
      "Pending payment order expiry scheduler",
      "Dockerized setup using a multi stage build and Compose for Postgres and Redis",
    ],
    tags: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Redisson", "JWT", "PayPal SDK", "Docker", "Maven"],
    role: "Backend",
    status: "IN PROGRESS",
    liveUrl: "https://np-shop-web.vercel.app/",
    repoUrl: "https://github.com/julhariemaddin/np-shop-api",
    featured: false, // Set to false so the Full-Stack version takes priority on the home page
  },
  {
    slug: "np-shop-web",
    title: "NP-Shop Web",
    summary:
      "The frontend application for NP-Shop, allowing users to browse products, manage a cart, checkout via PayPal, and view their order history.",
    description:
      "This is the user facing storefront built with React and Vite that talks directly to the NP-Shop API. I used Zustand to handle global cart state, ensuring it stays synchronized with the backend tracking data. One of the main challenges was configuring Axios to automatically attach JWT tokens and handle silent token refreshes on 401 errors. If a token expires, the app refreshes it in the background and queues up any failed requests so the user experience is never interrupted.",
    highlights: [
      "Centralized Axios client with automatic JWT attachment and silent refresh on 401 errors",
      "Server synced cart via Zustand that mirrors the backend Redis cart setup",
      "Redirect based PayPal checkout with dedicated success and cancel landing pages",
      "Route guards including ProtectedRoute, AdminRoute, and GuestRoute configurations",
      "Admin panel for managing inventory, categories, and uploading product images",
      "Dark mode support with system preference detection and manual override toggle",
    ],
    tags: ["React 18", "Vite", "React Router", "Zustand", "Axios", "Tailwind CSS", "Framer Motion", "Vercel"],
    role: "Frontend",
    status: "IN PROGRESS",
    liveUrl: "https://np-shop-web.vercel.app/",
    repoUrl: "https://github.com/julhariemaddin/np-shop-web",
    featured: false, // Set to false so the Full-Stack version takes priority on the home page
  },
];