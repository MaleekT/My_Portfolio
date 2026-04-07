import { Skill } from "@/types";

export const skills: Skill[] = [
  // Design
  { name: "UI/UX Design", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Wireframing", category: "Design" },
  { name: "Prototyping", category: "Design" },
  { name: "Design Systems", category: "Design" },

  // Webflow
  { name: "Webflow Development", category: "Webflow" },
  { name: "Webflow CMS", category: "Webflow" },
  { name: "Client-First Framework", category: "Webflow" },
  { name: "Finsweet Attributes", category: "Webflow" },
  { name: "Custom Animations", category: "Webflow" },
  { name: "Webflow Ecommerce", category: "Webflow" },
  { name: "Webflow SEO", category: "Webflow" },

  // Development
  { name: "HTML/CSS", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "Responsive Design", category: "Development" },
  { name: "Git/GitHub", category: "Development" },

  // Integrations
  { name: "Memberstack", category: "Integrations" },
  { name: "Zapier", category: "Integrations" },
  { name: "Airtable", category: "Integrations" },
  { name: "WhatsApp API", category: "Integrations" },
  { name: "Custom Forms", category: "Integrations" },
  { name: "Third-Party APIs", category: "Integrations" },
];

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>
);
