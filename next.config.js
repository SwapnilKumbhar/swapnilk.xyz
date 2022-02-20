/** @type {import('next').NextConfig} */

const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require("remark-prism"),
      {
        transformInlineCode: true,
        plugins: [
          'autolinker',
          'command-line',
          'data-uri-highlight',
          'diff-highlight',
          'inline-color',
          'keep-markup',
          'line-numbers',
          'show-invisibles',
          'treeview',
        ]
      }
    ],
    rehypePlugins: [],
  },
});


module.exports = withMdx({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  distDir: 'build'
});
