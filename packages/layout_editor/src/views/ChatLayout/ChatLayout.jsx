import React from 'react';
import { Box, useTheme } from '@embeddedchat/ui-elements';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import ChatBody from '../Chatbody/ChatBody';
import ChatInput from '../ChatInput/ChatInput';
import { getChatLayoutStyles } from './ChatLayout.styles';
import DemoSidebar from '../DemoSidebar/DemoSidebar';
import members from '../../data/members.json';

const ChatLayout = () => {
  const styles = getChatLayoutStyles(useTheme());

  const handleResize = (size) => {
    const minSize = 26.5;
    const maxSize = 60;
    const minWidth = 350;
    const maxWidth = 796;

    const sidebarWidth =
      minWidth +
      ((size - minSize) / (maxSize - minSize)) * (maxWidth - minWidth);

    console.log(sidebarWidth);
  };

  return (
    <Box css={styles.layout} className="ec-chat-layout">
      <PanelGroup direction="horizontal">
        <Panel>
          <Box css={styles.chatMain}>
            <ChatBody />
            <ChatInput />
            <div id="emoji-popup" />
          </Box>
        </Panel>
        <PanelResizeHandle
          style={{
            width: '2px',
            boxShadow: '0px 0px 0.5px rgba(0, 0, 0, 0.5)',
          }}
        />
        <Panel
          defaultSize={26.5}
          minSize={26.5}
          maxSize={60}
          onResize={handleResize}
        >
          <Box className="ec-sidebar-view" style={{ height: '100%' }}>
            <DemoSidebar members={members} />
          </Box>
        </Panel>
      </PanelGroup>
    </Box>
  );
};

export default ChatLayout;
