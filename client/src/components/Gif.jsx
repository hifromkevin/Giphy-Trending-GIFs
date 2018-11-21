import React from 'react';

const Gif = ({gif}) => (
<div className="main__block" key={gif.id}>
	{console.log('GIF!', gif)}
	<img className="main__block__image" src={gif.images.downsized_medium.url} />
	<p>{gif.title}, {gif.rating}, {gif.import_datetime}</p>

	<p>{gif.username}</p>
</div>
);

export default Gif;

/*
	<img src={gif.user.avatar_url} width="30px" /> only works when the gif has a user. 
	Next step, create a conditional for whether a user exists
*/