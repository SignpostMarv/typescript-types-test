export async function Test() {
	return new Promise((yup) => {
		requestIdleCallback(() => {
			alert('done');
			yup();
		});
	});
}

//# sourceMappingURL=test.module.js.map
