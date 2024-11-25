import { Content } from "@root/src/@types/content";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";

const contentsDirectory = join(process.cwd(), "src", "@contents");

export function getContentSlugs() {
  return fs.readdirSync(contentsDirectory);
}

export function getContentBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    content,
    readingTime: readingTime(content).minutes,
  } as Content;
}

export function getAllContents(): Content[] {
  const slugs = getContentSlugs();

  const contents = slugs
    .map(slug => {
      const content = getContentBySlug(slug);
      const readingTimeResult = readingTime(content.content).minutes;

      return {
        ...content,
        readingTime: readingTimeResult,
      };
    })
    .sort((content1, content2) =>
      content1.createdAt > content2.createdAt ? -1 : 1,
    );
  return contents;
}
