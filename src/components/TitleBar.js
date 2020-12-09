const TitleBar = ({ stories, loaded, handleSelectChange }) => {


    if (!loaded) {
        return <p> loading...</p>
    }

    function refreshPage() {
        window.location.reload(false);
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
            <h4>select an author</h4>
            <select onChange={handleSelectChange}>
                {authorList}
            </select>
            <button onClick={refreshPage}>RESET!</button>
        </>

        // onChange on select, when that is selected it changes the storyList
    )
}

export default TitleBar