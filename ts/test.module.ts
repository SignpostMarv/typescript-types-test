import {requestIdleCallback} from "requestidlecallback";

export async function Test() : Promise<void> {
	return new Promise((yup) => {
		requestIdleCallback(() => {
			alert('done');

			yup();
		});
	});
}
