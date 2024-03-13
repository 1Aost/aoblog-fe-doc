import React from 'react';
import ActionRender from '@/components/Display/ActionRender';

const ActionRenderDemo = () => {
  return (
      <>
        <ActionRender
          onEdit={() => {
            alert('edit!');
          }}
          onDelete={() => {
            alert('delete!')
          }}
          buttons={[{
            title: '按钮1',
            onClick: () => alert('button1')
            },
            {
              title: '按钮2',
              onClick: () => alert('button2')
            }
          ]}
          extra={<div style={{ lineHeight: '32px', fontSize: '14px' }}>自定义节点</div>}
        />
      </>
  )
};

export default ActionRenderDemo;
