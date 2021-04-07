import Link from "next/link";
import * as React from "react";
import { BlogPostMeta } from "../../components/blog-post-meta";

import type { IBlogPostSummary } from "../../data/blog-posts";

export function BlogSummaryCard(props: IBlogPostSummary): JSX.Element {
  const { description, publishDateIso, slug, thumbnail, title } = props;

  return (
    <Link href={"/blog/" + slug}>
      <a className="bg-gray-50 cursor-pointer flex group hover p-2 rounded hover:shadow">
        <img src={thumbnail}></img>
        <div>
          <h2 className={`font-bold group-hover:underline`}>{title}</h2>
          <BlogPostMeta publishDateIso={publishDateIso} />
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
}
