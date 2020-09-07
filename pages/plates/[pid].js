import Link from 'next/link'

import Page from '../../components/page/index'
import { getPlateData, getAllPlatesIds } from '../../lib/getPlatesData'

const Plate = ({ plateData }) => {
    return (
        <Page>
            <pre>{plateData}</pre>
            <Link href="/">
                <a className="text-blue-500 mt-8 text-lg underline inline-block">
                    Back to Home
                </a>
            </Link>
        </Page>
    )
}

export async function getStaticPaths() {
    const paths = getAllPlatesIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const plateData = getPlateData(params.pid)
    return {
        props: {
            plateData,
        },
    }
}

export default Plate
