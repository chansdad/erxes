import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover, Badge } from 'react-bootstrap';
import { Icon } from 'modules/common/components';
import { NotificationsLatest } from '../containers';
import { NotifButton } from './styles';

const Widget = ({ unreadCount }) => {
  const popoverNotification = (
    <Popover
      id="npopover"
      className="notification-popover"
      title="Notifications"
    >
      <NotificationsLatest />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom"
      containerPadding={15}
      overlay={popoverNotification}
    >
      <NotifButton>
        <Icon icon="android-notifications" />
        <Badge>{unreadCount !== 0 ? unreadCount : null}</Badge>
      </NotifButton>
    </OverlayTrigger>
  );
};

Widget.propTypes = {
  unreadCount: PropTypes.number
};

export default Widget;
