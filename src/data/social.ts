export interface SocialLink {
  title: string;
  link: string;
  icon: "x" | "linkedin" | "github";
}

export const socialLinks: SocialLink[] = [
  { title: "X (Twitter)", link: "https://x.com/JoseSaranda", icon: "x" },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/josesaranda/",
    icon: "linkedin",
  },
  { title: "GitHub", link: "https://github.com/josesaranda", icon: "github" },
];
