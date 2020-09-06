import Link from 'next/link'

const Plate = ({ title, value }) => {
    return title ? (
        <div className="text-2xl mt-10 rounded-sm bg-teal-500 shadow-md px-5 py-3 text-white font-bold ">
            {value}
        </div>
    ) : (
        <Link href="/plates/[pid]" as={`/plates/${value}`}>
            <a className="inline-block w-full rounded-sm shadow-md px-5 py-2 font-bold">
                {value}
            </a>
        </Link>
    )
}

export default Plate
