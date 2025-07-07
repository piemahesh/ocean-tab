import {
  COLLEGE_INVITES_GALLERY,
  IWCCT_GALLERY,
  LEGACY_GALLERY,
  SFM_GALLERY,
  TECHFEST_GALLERY,
  THIRU_SPOKEN,
} from "../../../assets";
import type { GalleryData, Image } from "../types";

// Mock image data - replace with your actual images
const generateMockImages = (category: string, count: number): Image[] => {
  const colors: string[] = [
    "bg-gradient-to-br from-blue-400 to-purple-600",
    "bg-gradient-to-br from-green-400 to-blue-500",
    "bg-gradient-to-br from-pink-400 to-red-500",
    "bg-gradient-to-br from-yellow-400 to-orange-500",
    "bg-gradient-to-br from-indigo-400 to-purple-600",
    "bg-gradient-to-br from-teal-400 to-blue-500",
  ];

  return Array.from(
    { length: count },
    (_, i): Image => ({
      src: `https://picsum.photos/400/300?random=${category}-${i}`,
      alt: `${category} ${i + 1}`,
      title: `${category} Project ${i + 1}`,
      subtitle: `Amazing ${category.toLowerCase()} project showcasing modern design and functionality. This is a detailed description of the project.`,
      color: colors[i % colors.length],
    })
  );
};

export const galleryData: GalleryData = {
  "Web Development": generateMockImages("Web", 18),
  "Mobile Apps": generateMockImages("Mobile", 16),
  "UI/UX Design": generateMockImages("Design", 22),
  "AI & Machine Learning": generateMockImages("AI", 15),
  "Cloud Computing": generateMockImages("Cloud", 19),
  "Block chain": generateMockImages("Blockchain", 14),
};

export const OCEAN_GALLERY_DATA: GalleryData = {
  "TechFest 2025": TECHFEST_GALLERY,
  "College Invites": COLLEGE_INVITES_GALLERY,
  "IWCCT 2017": IWCCT_GALLERY,
  "Ocean Legacy": LEGACY_GALLERY,
  "SFM APP Launch": SFM_GALLERY,
  "SPOKEN ENGLISH": THIRU_SPOKEN,
};
