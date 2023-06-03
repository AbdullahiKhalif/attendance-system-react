import React, { useState } from 'react';

const CA203 = ()=> {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', isChecked: false },
    { id: 2, label: 'Checkbox 2', isChecked: false },
    { id: 3, label: 'Checkbox 3', isChecked: false },
  ]);

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      return { ...checkbox, isChecked };
    });
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheck = (event, checkboxId) => {
    const isChecked = event.target.checked;
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === checkboxId) {
        return { ...checkbox, isChecked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckAll} />
        Check all
      </label>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id}>
          <label>
            <input
              type="checkbox"
              checked={checkbox.isChecked}
              onChange={(event) => handleCheck(event, checkbox.id)}
            />
            {checkbox.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CA203 ;