import { now } from 'svelte/internal';

const comments = new Map();

export const addComment = ({ artistSlug, comment, user }) => {
	let commentArray;
	if (artistSlug) {
		commentArray = comments.get(artistSlug);
	}

	const timeStamp = now();
	const newComment = {
		timeStamp,
		comment,
		user,
	};

	if (!commentArray) {
		comments.set(artistSlug, [newComment]);
	} else {
		commentArray.push(newComment);
	}
	return newComment;
};

export const loadAllComments = ({ artistSlug }) => {
	return comments.get(artistSlug);
};
