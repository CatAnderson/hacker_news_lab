import { useEffect, useState } from "react";
import TitleBar from '../components/TitleBar'
import StoryList from '../components/StoryList'

const NewsContainer = () => {

    const [stories, setStories] = useState({})
    const [loaded, setLoaded] = useState(false);
    // const [selectedStoryId, setSelectedStoryId] = useState({})


    const getStory = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then(data => {

                const newsStories = data.slice(0, 15).map((storyId) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                        .then(res => res.json())
                });
                Promise.all(newsStories)
                    .then(stories => setStories(stories))
                    .then(() => setLoaded(true))
            })

    };

    useEffect(() => {
        getStory();
    }, [])


    return (
        <>
            <h1>Hacker News Feed</h1>
            <TitleBar />


            <StoryList
                stories={stories}
                loaded={loaded} />
        </>
    )
}

export default NewsContainer;