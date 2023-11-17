var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const parseDate1 = new Date(date1);
	const parseDate2 = new Date(date2);
	const timeDifference = parseDate2-parseDate1;
	const daysDifference = Math.floor(timeDifference/(1000*24*60*60));
	return daysDifference;

	
};
	 
	
	

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
