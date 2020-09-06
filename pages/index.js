import Page from '../components/page/index'
import HomePage from '../components/home/index'
import { getAllPlatesIds } from '../lib/getPlatesData'

const Home = ({ ids }) => {
    return (
        <Page description="boiler plate generator home page">
            <HomePage data={ids} />
        </Page>
    )
}

export async function getStaticProps() {
    return {
        props: {
            ids: getAllPlatesIds(),
        },
    }
}

export default Home
