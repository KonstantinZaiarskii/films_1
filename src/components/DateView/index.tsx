import React from "react";

import prepareDate from "utils/prepareDate";

interface IDateViewParams {
	value : string;
}

const DateView: React.FunctionComponent<IDateViewParams> = ({value}) => {
	const { day, month , year } = prepareDate(value);
	return (
		<div style={{display: 'flex', gap: 10}} className='date-view'>
      <span style={{ fontWeight: "bold" }}>Год выхода : </span> 
      <span className='year'>{year}</span>
		</div>
	);
};

export default DateView;
