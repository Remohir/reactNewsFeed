import React from "react";
import NewsItems from "./news_list_item";

const newsList = (props) => {
	const items = props.news.map((item) => {
		return (
			<NewsItems key={ item.id } item={ item } />
		)
	});

	return (
		<div>
			{ items }
		</div>
	)
}

export default newsList;