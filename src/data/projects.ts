export interface Project {
  id: string;
  name: string;
  edition: string;
  description: string;
  type: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "wey-wey-web-2025",
    name: "Wey Wey Web",
    edition: "2025 Edition",
    type: "Conference",
    description:
      "A Yay-Yay international conf for UX and Front-End Developers in Malaga, November 17 - 18, 2025",
    link: "https://weyweyweb.com",
  },
  {
    id: "lambda-world-2025",
    name: "Lambda World",
    edition: "2025 Edition",
    type: "Conference",
    description:
      "Experience the brilliance of functional programming at Lambda World in Cadiz, Spain. Join us from October 23-24, 2025, to connect with our (dis)functional family, dive into FP trends, and soak up the coastal charm of this must-attend event!",
    link: "https://lambda.world",
  },
  {
    id: "j-on-the-beach-2025",
    name: "J On The Beach",
    edition: "2025 Edition",
    type: "Conference",
    description:
      "A Big Data conference for developers, DevOps & Data Scientists on the beach! May 14-16, 2025 in Malaga, Spain. If you are into distributed systems, Machine Learning, Microservices, AI or DevSecOps, buy your tickets NOW!",
    link: "https://jonthebeach.com",
  },
  {
    id: "wey-wey-web-2024",
    name: "Wey Wey Web",
    edition: "2024 Edition",
    type: "Conference",
    description:
      "A Yay-Yay international conf for UX and Front-End Developers in Malaga, 27-29 November, 2024",
    link: "https://2024.weyweyweb.com",
  },
  {
    id: "j-on-the-beach-2024",
    name: "J On The Beach",
    edition: "2024 Edition",
    type: "Conference",
    description:
      "A Big Data conference for developers, DevOps & Data Scientists On The Beach! May 8-10, 2024 in Torremolinos - Malaga, Spain. If you are into Distributed Systems, Data Engineering, DevSecOps or Data Science, buy your tickets NOW!",
    link: "https://2024.jonthebeach.com",
  },
  {
    id: "lambda-world-2024",
    name: "Lambda World",
    edition: "2024 Edition",
    type: "Conference",
    description:
      "Experience the brilliance of functional programming at Lambda World in Cadiz, Spain. Join us from October 2nd to 4th, 2024, to connect with our (dis)functional family, dive into FP trends, and soak up the coastal charm of this must-attend event! Warning: excessive laughter and sudden bursts of genius may occur.",
    link: "https://2024.lambda.world",
  },
  {
    id: "wey-wey-web-2023",
    name: "Wey Wey Web",
    edition: "2023 Edition",
    type: "Conference",
    description:
      "A Yay-Yay international conf for UX and Front-End Developers in Malaga, November 23-24, 2023",
    link: "https://2023.weyweyweb.com",
  },
];
