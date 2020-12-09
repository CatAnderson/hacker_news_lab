import Story from './Story'


const StoryList = ({ filteredStories, loaded }) => {

    if (!loaded) {
        return <p> loading...</p>
    }

    const storyList = filteredStories.map((story) => {
        return (
            <Story story={story} key={story.id} />
        )
    }

    )




    return (
        <>
            <h2> stories...</h2>
            <h2>{storyList}</h2>

        </>
    )
}

export default StoryList;