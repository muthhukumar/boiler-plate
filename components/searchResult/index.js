import Plate from './result'

const SearchResult = ({ data, queryText }) => {
    let result = []
    console.log(data)
    result = data.filter(({ params }) => {
        return params.pid.toLowerCase().includes(queryText.toLowerCase())
    })

    return (
        <div className="w-full">
            <Plate value={result.length + ' result found'} title />
            {result.map(({ params }) => (
                <Plate value={params.pid} key={params.pid} />
            ))}
        </div>
    )
}

export default SearchResult
