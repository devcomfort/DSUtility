import { tags } from "typia";

export type Url = string & tags.Format<"url">;
