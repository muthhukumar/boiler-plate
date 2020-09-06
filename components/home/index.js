import { useState } from 'react'

import SearchResult from '../searchResult/index'

const HomePage = ({ data }) => {
    const [queryText, setQueryText] = useState('')

    const onSubmitHandler = event => {
        event.preventDefault()
    }

    return (
        <div className="flex items-center flex-col">
            <h1 className="text-center text-xl font-medium my-4">
                Generate boiler plate code for Html, Pug and more.
            </h1>
            <form
                className="flex justify-center w-full"
                onSubmit={onSubmitHandler}
            >
                <input
                    className="w-3/5 border focus:outline-none focus:border-gray-500 border-gray-400 px-5 py-2 rounded-l-sm"
                    type="text"
                    value={queryText}
                    onChange={e => setQueryText(e.target.value)}
                    placeholder="search programming language"
                />
                <button
                    type="submit"
                    className="hover:bg-teal-600 focus:outline-none w-32 rounded-r-sm bg-teal-500 shadow-md px-5 py-2 text-white font-bold"
                >
                    search
                </button>
            </form>
            {queryText && <SearchResult queryText={queryText} data={data} />}
        </div>
    )
}

export default HomePage
