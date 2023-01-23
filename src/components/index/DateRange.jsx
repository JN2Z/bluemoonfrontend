import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const DateRange = () => {
  
  return (
     <Space>
      <RangePicker size='medium' />
    </Space>
  )
}

export default DateRange
