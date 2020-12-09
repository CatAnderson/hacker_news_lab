import { useEffect, useState } from "react";
import TitleBar from '../components/TitleBar'
import StoryList from '../components/StoryList'

const NewsContainer = () => {

    const [stories, setStories] = useState({})
    const [loaded, setLoaded] = useState(false);
    const [filteredStories, setFilteredStories] = useState({})
    // const [selectedStoryId, setSelectedStoryId] = useState({})


    const getStory = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then(data => {

                const newsStories = data.slice(0, 30).map((storyId) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                        .then(res => res.json())
                });
                Promise.all(newsStories)
                    .then(stories => {
                        setStories(stories)
                        setFilteredStories(stories)
                    })
                    .then(() => setLoaded(true))
            })

    };

    useEffect(() => {
        getStory();
    }, [])

    const handleSelectChange = event => {
        const filteredStories = stories.filter(story => {
            return story.by === event.target.value
        })
        setFilteredStories(filteredStories)

    }


    return (
        <><div id="header"> <h1 >Hacker News</h1> <div id="cursor"></div></div>
            <TitleBar
                stories={stories}
                loaded={loaded}
                handleSelectChange={handleSelectChange} />


            <StoryList
                filteredStories={filteredStories}
                loaded={loaded} />
        </>
    )
}

export default NewsContainer;