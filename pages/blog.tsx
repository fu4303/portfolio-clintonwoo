import { GetStaticPropsContext } from "next";

import { blogPostSummaries } from "../src/data/blog-posts";
import { BlogPage } from "../src/pages/blog-page/blog-page";

export async function getStaticProps(_context: GetStaticPropsContext) {
  return {
    props: { blogPostSummaries }, // will be passed to the page component as props
  };
}

export default BlogPage;
