import { useAppProvider } from 'AppProvider';
import { FORMAT_OPTIONS, MODULES } from 'constants/rich-text-editor';
import React, { FC, useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import './rich-text-editor.css';

interface Props {
  width: number;
  height: number;
}

const RichTextEditor: FC<Props> = ({ width, height }) => {
  const { text } = useAppProvider();

  const editorRef = useRef<ReactQuill>(null);

  const [value, setValue] = useState('');

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <ReactQuill
      placeholder="Write something awesome..."
      ref={editorRef}
      style={{
        background: text.background,
        borderRadius: text.borderRadius,
        width: `${width}px`,
        height: `${height}px`,
      }}
      formats={FORMAT_OPTIONS}
      modules={MODULES}
      theme="bubble"
      value={value}
      onChange={setValue}
    />
  );
};

export default RichTextEditor;