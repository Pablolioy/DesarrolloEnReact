const url = 'https://unogsng.p.rapidapi.com/images?netflixid=81037846&offset=3&limit=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '016e2f19demshdc55a85f70c8c0dp183567jsn5e9db0ccc619',
		'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
	}
};
 
async function test (){

    
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
test()