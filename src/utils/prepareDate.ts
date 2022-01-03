const prepareDate = (value:string) => {
	const newDate = new Date(value.replace('Z', '').replace('T', ''));
	return {
		day: newDate.getDate(),
		month: newDate.getMonth() + 1,
		year:newDate.getFullYear(),
	};
};

export default prepareDate;

//new Date(value.replace(' ', 'T' )+'Z');