import React from 'react';
import { Select } from 'antd';
const provinceData = ['Standard', 'Double','Studio','Deluxe','With View','Suites','Presidential'];


const RoomTypePicker = () => {

  return (
    <>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
    </>
  );
};

export default RoomTypePicker
