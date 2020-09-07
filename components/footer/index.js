import { useState } from 'react'
import Link from 'next/link'

import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Footer = () => {
    const [queryText, setQueryText] = useState('')

    return (
        <div className="border border-grey-500 flex p-4 bg-white shadow-md items-center justify-around text-black my-2 rounded-lg">
            <div className="mx-4">
                <Link href="https://www.twitter.com/_0_void_">
                    <a className="hover:cursor-pointer" target="_blank">
                        <TwitterIcon className="mx-2" fontSize="large" />
                    </a>
                </Link>
                <Link href="https://www.github.com/0-void">
                    <a className="hover:cursor-pointer" target="_blank">
                        <GitHubIcon className="mx-2" fontSize="large" />
                    </a>
                </Link>
                <Link href="https://who-am-i.vercel.app">
                    <a className="hover:cursor-pointer" target="_blank">
                        <AccountCircleIcon fontSize="large" className="mx-2" />
                    </a>
                </Link>
            </div>
            <form name="plate request" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="plate request" />
                <input
                    className="text-lg border border-grey-400 rounded px-3 py-2 flex-1 focus:outline-none focus:outline-grey-500"
                    placeholder="request plate"
                    name="plate"
                    type="text"
                />
                <button
                    type="submit"
                    className="m-2 text-lg bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded"
                >
                    submit
                </button>
            </form>
        </div>
    )
}

export default Footer
