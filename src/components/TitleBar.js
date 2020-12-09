const TitleBar = ({ stories, loaded }) => {


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
            <h2>This is the title bar</h2>
            <select>
                {authorList}
            </select>
        </>
    )
}

export default TitleBar