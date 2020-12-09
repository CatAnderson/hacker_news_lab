const TitleBar = ({ stories, loaded, handleSelectChange }) => {


    if (!loaded) {
        return <p> loading...</p>
    }


    const authors = stories.map(story => {
        return story.by
    })

    const newAuthors = [...new Set(authors)]


    const authorList = newAuthors.map((author, index) => {
        return (
            <option key={index} value={author}>{author}</option>
        )
    }
    )

    return (
        <>
            {/* <h2>This is the title bar</h2> */}
            <select onChange={handleSelectChange}>
                {authorList}
            </select>
        </>

        // onChange on select, when that is selected it changes the storyList
    )
}

export default TitleBar