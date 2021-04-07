import * as React from "react";
import { format, parseISO } from "date-fns";

import { MainLayout } from "../../layouts/main-layout";
import type { IBlogPost } from "../../data/blog-posts";

export interface IBlogPostPageProps {
  blogPost: IBlogPost;
}

export function BlogPostPage(props: IBlogPostPageProps): JSX.Element {
  const {
    blogPost: { blogPostContent, publishDateIso, title },
  } = props;

  const publishedDateMemo = React.useMemo(
    () => format(parseISO(publishDateIso), "d MMM Y"),
    [publishDateIso]
  );

  return (
    <MainLayout className="px-8 py-4">
      <h1 className="font-bold pl-1 pb-2 dark:bg-gray-800">{title}</h1>
      <div>{publishedDateMemo}</div>
      <div className="space-y-4">{blogPostContent}</div>
    </MainLayout>
  );
}
