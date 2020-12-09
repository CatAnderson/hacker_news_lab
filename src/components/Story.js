const Story = ({ story }) => {

    return (
        <>
            <li>

                <a href={story.url} target="_blank">{story.title}</a>
                <p>{story.score} points, story by {story.by}</p>
            </li>
        </>
    )
}

export default Story;