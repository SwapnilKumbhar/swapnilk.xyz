// https://www.markdownguide.org/basic-syntax
import BlockQuote from './Blockquote';
import { Code, CodeBlock } from './Code';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from './Header';
import { OrderedList, UnorderedList } from './List';
import P from './Paragraph';
import { Bold, Italics } from './Emphasis';
import HorizontalRule from './HorizontalRule';
import Link from './Link';
import {
  Table, THead, TBody, Th, Tr, Td,
} from './Table';
import Img from './Image';

const COMPONENTS = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  i: Italics,
  b: Bold,
  blockquote: BlockQuote,
  ol: OrderedList,
  ul: UnorderedList,
  pre: CodeBlock,
  code: Code,
  hr: HorizontalRule,
  a: Link,
  table: Table,
  thead: THead,
  tbody: TBody,
  th: Th,
  tr: Tr,
  td: Td,
  img: Img,
};

export default COMPONENTS;
