import React from "react";
import styled from "styled-components";
import { Modal, Tabs } from "antd";

interface Props {
  onClose: () => void;
  isVisible: boolean;
}

const LegalPopup: React.FC<Props> = ({ onClose, isVisible }: Props) => {
  const termsOfService = `Insert your terms of service here`;
  const privacyPolicy = `Insert your privacy policy here`;

  return (
    <StyledModal
      title="Legal Disclaimers"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <StyledTabs defaultActiveKey="1">
        <TabPane tab="Terms of Service" key="1">
          <LegalText>{termsOfService}</LegalText>
        </TabPane>
        <TabPane tab="Privacy Policy" key="2">
          <LegalText>{privacyPolicy}</LegalText>
        </TabPane>
      </StyledTabs>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    overflow: hidden;
    width: 80%;
    max-width: 1000px;
  }
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    color: #18216d;
    font-size: 16px;
    font-weight: 500;
  }

  .ant-tabs-ink-bar {
    background-color: #18216d;
  }

  .ant-tabs-content-holder {
    padding: 20px;
  }
`;

const TabPane = styled(Tabs.TabPane)`
  .ant-tabs-content {
    padding-top: 20px;
  }
`;

const LegalText = styled.div`
  color: #18216d;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 20px;
  white-space: pre-wrap;
`;

export default LegalPopup;
