export const RECEIVE_MEMES = 'RECEIVE_MEMES'

function receiveMeme(json){
	const {memes} =json.data
	return {
		type:RECEIVE_MEMES,
		memes
	}
}

function fetchMemesJson(){
	return fetch('https://api.imgflip.com/get_memes')
		.then(response => response.json())
}

export function fetchMemes(){
	return function(dispatch){
		return fetchMemesJson()
		.then(json =>dispatch(receiveMeme(json)))
	}
}