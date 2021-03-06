export const config = {
  siteMeta: {
    title: "飛ばねぇ馬はただの馬。",
    teamName: "Pranc1ngPegasus",
    description: "Pranc1ngPegasusのブログ",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://blog.pranc1ngpegasus.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "https://pranc1ngpegasus.com",
    },
    {
      title: "GitHub",
      href: "https://github.com/Pranc1ngPegasus",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/pranc1ngpegasus",
    }
  ],
};
