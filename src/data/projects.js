/**
 * Add a new project by adding a new object to this array.
 * It will appear on the Home page (if featured: true) and on /projects,
 * with its own detail page at /projects/<slug>.
 */
export const projects = [
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
    status: "In progress",
    liveUrl: undefined,
    repoUrl: "https://github.com/julhariemaddin/np-shop-api",
    featured: true,
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
    status: "In progress",
    liveUrl: undefined,
    repoUrl: "https://github.com/julhariemaddin/np-shop-web",
    featured: true,
  },
];