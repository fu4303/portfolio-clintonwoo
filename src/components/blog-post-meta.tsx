import { format, parseISO } from "date-fns";
import * as React from "react";

export interface IBlogPostMetaProps {
  publishDateIso: string;
}

export function BlogPostMeta(props: IBlogPostMetaProps): JSX.Element {
  const { publishDateIso } = props;

  const formattedPublishDate = React.useMemo(
    () => format(parseISO(publishDateIso), "d MMM Y"),
    [publishDateIso]
  );

  return <div className="text-xs">{formattedPublishDate} - 5 mins</div>;
}
