const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: 'Technical Meeting',
			Location: 'Google Meeting',
			time: '10:00 AM',
		};
		resolve(meetingDetails);
	} else {
		reject(new Error('Meeting already sceduled!'));
	}
});

// const addToCalender = (meetingDetails) => {
// 	return new Promise((resolve, reject) => {
// 		const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.time} at ${meetingDetails.Location}`;
// 		resolve(calender);
// 	});
// };

// +++++++++++ return Promise.resolve Short and Clean then return New Promise ++++++++++++
const addToCalender = (meetingDetails) => {
	const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.time} at ${meetingDetails.Location}`;
	return Promise.resolve(calender);
};

/* ++++++++++++++  Returning Promise before addToCalender Function ++++++++++++++*/
// meeting

// 	.then((res) => {
// 		console.log(JSON.stringify(res));
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

meeting
	.then(addToCalender)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err.message);
	});

//++++++++++++++++ Asynnc Function +++++++++++++++

// async function myMeeting() {
// 	const meetingDetails = await meeting;
// 	const calender = await meetingDetails;
// 	console.log(calender);
// }
// myMeeting();
