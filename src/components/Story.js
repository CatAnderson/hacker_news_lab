const Story = ({ story }) => {

    return (
        <><div >
            <li >

                <a href={story.url} target="_blank">&#128190; {story.title}</a>
                <p >{story.score} points, story by {story.by}</p>
            </li>
        </div>
        </>
    )
}

export default Story;