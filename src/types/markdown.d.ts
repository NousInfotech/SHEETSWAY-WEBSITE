declare module 'gray-matter' {
  interface GrayMatterFile<I extends string = string> {
    data: { [key: string]: unknown };
    content: string;
    excerpt?: string;
    orig: Buffer | I;
    language?: string;
    matter: string;
    stringify(lang: string): string;
  }

  interface Options {
    excerpt?: boolean | ((file: GrayMatterFile, options: Options) => string);
    excerpt_separator?: string;
    engines?: {
      [index: string]: (input: string, options: Options) => object;
    };
    language?: string;
    delimiters?: string | [string, string];
  }

  function matter<I extends string = string>(
    input: I | { contents: I },
    options?: Options
  ): GrayMatterFile<I>;

  export = matter;
}

declare module 'remark-html' {
  import { Plugin } from 'unified';
  const remarkHtml: Plugin;
  export = remarkHtml;
}

declare module 'remark-gfm' {
  import { Plugin } from 'unified';
  const remarkGfm: Plugin;
  export = remarkGfm;
} 