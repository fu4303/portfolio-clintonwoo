enum Month {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}

const blogOne: IBlogPost = {
  blogPostContent: "",
  description: "",
  publishDateIso: new Date(2021, Month.JAN, 1).toISOString(),
  slug: "",
  thumbnail: "",
  title: "",
};

export interface IBlogPostSummary {
  description: string;
  publishDateIso: string;
  slug: string;
  thumbnail: string;
  title: string;
}

export interface IBlogPost extends IBlogPostSummary {
  blogPostContent: React.ReactNode;
}

/** Blog posts in chronological order, newest first */
export const blogPosts: IBlogPost[] = [];

export const blogPostMap = blogPosts.reduce<Map<string, IBlogPost>>(
  (acc, curr) => {
    acc.set(curr.slug, curr);
    return acc;
  },
  new Map()
);
export const blogPostSummaries: IBlogPostSummary[] = blogPosts.slice(0, 6);
