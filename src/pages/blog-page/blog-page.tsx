import * as React from "react";

import type { IBlogPostSummary } from "../../data/blog-posts";
import { MainLayout } from "../../layouts/main-layout";
import { BlogSummaryCard } from "./blog-summary-card";

export interface IBlogPageProps {
  blogPostSummaries: IBlogPostSummary[];
}

export function BlogPage(props: IBlogPageProps): JSX.Element {
  const { blogPostSummaries } = props;

  return (
    <MainLayout className="px-8 py-4">
      <h1 className="font-bold pl-1 pb-2">Posts</h1>
      <div className="space-y-4">
        {blogPostSummaries.map((blogPost) => (
          <BlogSummaryCard
            key={blogPost.slug}
            description={blogPost.description}
            publishDateIso={blogPost.publishDateIso}
            slug={blogPost.slug}
            thumbnail={blogPost.thumbnail}
            title={blogPost.title}
          />
        ))}
      </div>
    </MainLayout>
  );
}
