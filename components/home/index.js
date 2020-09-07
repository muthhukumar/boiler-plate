import { useState } from 'react'

import SearchResult from '../searchResult/index'
import SearchIcon from '@material-ui/icons/Search'

const HomePage = ({ data }) => {
    const [queryText, setQueryText] = useState('')

    return (
        <div className="flex items-center flex-col">
            <div className="flex border border-grey-500 w-full justify-center items-center px-2 py-4 rounded-lg">
                <SearchIcon className="text-gray-400 " fontSize="large" />
                <input
                    className="text-lg w-3/5 focus:outline-none px-5 py-2 flex-2"
                    type="text"
                    value={queryText}
                    onChange={e => setQueryText(e.target.value)}
                    placeholder="search programming language, config and more"
                />
            </div>
            {queryText && <SearchResult queryText={queryText} data={data} />}
        </div>
    )
}

export default HomePage
