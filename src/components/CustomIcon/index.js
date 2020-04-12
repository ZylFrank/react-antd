import React from 'react';
import {
  ApiOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BorderRightOutlined,
} from '@ant-design/icons';

const CustomIcon = ({ type }) => {
  switch (type) {
    case 'ApiOutlined': {
      return <ApiOutlined />;
    }
    case 'PieChartOutlined': {
      return <PieChartOutlined />;
    }
    case 'BorderRightOutlined': {
      return <BorderRightOutlined />;
    }
    default:
      return <AreaChartOutlined />;
  }
};

export default CustomIcon;
