const Story = ({ story }) => {

    return (
        <>
            <li>
                {/* <h3>{story.title}</h3> */}
                <a href={story.url}>{story.title}</a>
            </li>
        </>
    )
}

export default Story;