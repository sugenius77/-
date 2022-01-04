import React from 'react'

const SelectBox = ({options, defaultValue, roundSelect}) => {

	return (
		<select onChange={roundSelect}>
			{options.map((option) => (
				// <option key={option.value} selected={defaultValue === option.value}>
				// 	{option.name}
				// </option>
				<option key={option.value} value={option.value} defaultValue={defaultValue === option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};
export default SelectBox;