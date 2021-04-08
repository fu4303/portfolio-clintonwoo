import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPathsContext,
  GetStaticPathsResult,
} from "next";
import {
  BlogPostPage,
  IBlogPostPageProps,
} from "../../src/pages/blog-post-page/blog-post-page";
import { blogPosts, blogPostMap } from "../../src/data/blog-posts";

export interface IBlogPostPageParams extends NodeJS.Dict<string> {
  id: string;
}

export async function getStaticPaths(
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult<IBlogPostPageParams>> {
  return {
    paths: blogPosts.map((blogPost) => ({ params: { id: blogPost.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<IBlogPostPageParams>
): Promise<GetStaticPropsResult<IBlogPostPageProps>> {
  const blogPost = blogPostMap.get(context?.params?.id!);

  if (!blogPost) {
    return { notFound: true };
  }

  return { props: { blogPost } }; // will be passed to the page component as props};
}

export default BlogPostPage;
