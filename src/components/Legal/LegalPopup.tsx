
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
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <StyledTabs defaultActiveKey="2">
        <Tabs.TabPane key="2" tab={t('Terms of Service')}>
          {TOSText.map((section, index) => (
            <React.Fragment key={index}>
              <LegalHeading>{t(section.title)}</LegalHeading>
              <LegalText>{t(section.content)}</LegalText>
            </React.Fragment>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane key="1" tab={t('Privacy Policy')}>
          {privacyPolicyText.map((section, index) => (
            <React.Fragment key={index}>
              <h4>{t(section.title)}</h4>
              <p>{t(section.content)}</p>
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{t(item)}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </Tabs.TabPane>
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
