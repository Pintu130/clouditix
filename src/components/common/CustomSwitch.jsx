import { useState } from 'react';

const CustomSwitch = ({ id, onChange, name,  }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = (e) => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`relative w-14 h-8 rounded-full ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}>
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transform transition-transform ${
          isOn ? 'translate-x-full' : ''
        }`}
      ></div>
      <input
        type="checkbox"
        id={id}
        name={name}
        className="opacity-0 w-0 h-0"
        checked={isOn}
        value={isOn}
        onChange={toggleSwitch}
      />
      <label htmlFor={id} className="cursor-pointer absolute top-0 left-0 w-full h-full"></label>
    </div>
  );
};

export default CustomSwitch;
