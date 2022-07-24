import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "Zenn",
    name: "Zenn",
    role: "",
    bio: "",
    avatarSrc: "https://pbs.twimg.com/profile_images/1192775453498494977/pb8Shc8G_400x400.jpg",
    sources: [
      "https://zenn.dev/pranc1ngpegasus/feed",
    ],
    includeUrlRegex: "zenn.dev",
    twitterUsername: "pranc1ngpegasus",
    githubUsername: "Pranc1ngPegasus",
    websiteUrl: "https://pranc1ngpegasus.com",
  },
  {
    id: "hatenablog",
    name: "はてなブログ",
    role: "",
    bio: "",
    avatarSrc: "https://pbs.twimg.com/profile_images/832417572179939328/sMSK9Con_400x400.jpg",
    sources: [
      "https://pranc1ngpegasus.hatenablog.com/rss",
    ],
    includeUrlRegex: "pranc1ngpegasus.hatenablog.com",
    twitterUsername: "pranc1ngpegasus",
    githubUsername: "Pranc1ngPegasus",
    websiteUrl: "https://pranc1ngpegasus.com",
  }
];
