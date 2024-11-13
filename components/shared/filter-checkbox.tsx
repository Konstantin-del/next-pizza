
import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
  text: string;
  value: string; //it in checkbox and we it get
  endAdornment?: React.ReactNode; // it additional(дополнительное) word or icon after checkbox 
  onCheckedChange?: (checked: boolean) => void; //when we click bool chenges 
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`} // добавляем id для связи лайбла и чекбокса => можно нажимать на лейбл
      />
      <label htmlFor={`checkbox-${String(value)}`} className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};