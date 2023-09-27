import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import style from './MarcdownRenderer.module.scss';

interface MarcdownRendererProps {
  data?: string
}

const MarcdownRenderer: React.FC<MarcdownRendererProps> = ({ data }) => (
  <div className={style.content}>
    {data ? (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        linkTarget="_blank"
      >
        {data}
      </ReactMarkdown>
    ) : null}
    <div className={style.shareButtonsGroup}>
      <div className="addthis_inline_share_toolbox" />
    </div>
  </div>
);

export default MarcdownRenderer;
