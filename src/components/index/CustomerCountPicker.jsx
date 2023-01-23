import React, { useState } from 'react';
import {Select} from 'antd';
const options = [];
for (let i = 1; i < 10; i++) {
  options.push({
    value: i.toString(36) + "",
    label: i.toString(36) + "",
  });
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const CustomerCountPicker = () => {
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>


      <Select size={size} defaultValue="1" onChange={handleChange} style={{width: 60}} options={options}/>
    </>
  );
};

export default CustomerCountPicker
