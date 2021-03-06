import React from 'react';
import styled from 'styled-components';
import { colors, dimensions } from 'modules/common/styles';
import QuickNavigation from '../containers/QuickNavigation';

const TopBar = styled.div`
  height: ${dimensions.headerSpacing}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  border: 0;
  flex-shrink: 0;
  padding: 0 ${dimensions.coreSpacing}px;
  background: ${colors.colorWhite};
  box-shadow: 0 0 4px ${colors.colorShadowGray};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

function MainBar() {
  return (
    <TopBar>
      <QuickNavigation />
    </TopBar>
  );
}

export default MainBar;
