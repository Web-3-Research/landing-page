import React from "react";
import styled from "styled-components";
import { Modal, Tabs } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import legalContentPrivacy from '../../content/LegalContentPrivacy.json';
import LegalContentTerms from '../../content/LegalContentTerms.json';

interface Props {
  onClose: () => void;
  isVisible: boolean;
}

const LegalPopup: React.FC<Props & WithTranslation> = ({ t, onClose, isVisible }) => {
  const TOSText = LegalContentTerms.sections;
  const privacyPolicyText = legalContentPrivacy.sections;

  return (
    <StyledModal
      title={t('Legal Disclaimers')}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <StyledTabs defaultActiveKey="1">
        <TabPane tab={t('Terms of Service')} key="2">
          {TOSText.map((section, index) => (
            <React.Fragment key={index}>
              <LegalHeading>{section.title}</LegalHeading>
              <LegalText>{section.content}</LegalText>
            </React.Fragment>
          ))}
        </TabPane>
        <TabPane tab={t('Privacy Policy')} key="1">
          <LegalText>
            {privacyPolicyText.map((section, index) => (
              <React.Fragment key={index}>
                <h4>{section.title}</h4>
                <p>{section.content}</p>
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </LegalText>
        </TabPane>
      </StyledTabs>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    overflow: hidden;
    width: 90%; // Increase this value to increase the width
    max-width: 1200px; // Increase this value to increase the maximum width
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

const LegalHeading = styled.h3`
  color: #18216d;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const LegalText = styled.div`
  color: #18216d;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export default withTranslation()(LegalPopup);
