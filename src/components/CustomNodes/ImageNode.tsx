import React, { FC, useState } from 'react';
import AddMediaModal from '../AddMediaModal/AddMediaModal';
import { Handle, NodeProps, NodeResizer, Position } from 'reactflow';
import { Image } from '@chakra-ui/react';

const ImageNode: FC<NodeProps> = ({ selected }) => {
  const [source, setSource] = useState<string>('');

  return (
    <>
      {source ? <NodeResizer keepAspectRatio isVisible={selected} /> : null}
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555', opacity: 0 }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={false}
      />

      {source ? (
        <Image width="100%" src={source} />
      ) : (
        <AddMediaModal onSourceSelect={setSource} />
      )}
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555', opacity: 0 }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={false}
      />
    </>
  );
};

export default ImageNode;
