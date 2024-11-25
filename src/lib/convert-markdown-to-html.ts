import showdown from "showdown";
import showdownHighlight from "showdown-highlight";

export async function convertMarkdownToHtml(markdown: string) {
  const converter = new showdown.Converter({
    extensions: [
      showdownHighlight({
        pre: true,
        auto_detection: true,
      }),
    ],
  });

  const result = converter.makeHtml(markdown);

  return result.toString();
}
