import Seo from '../seo'
import Navbar from '../navbar/index'

const Page = ({ title, description, children }) => {
    return (
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl mx-auto">
            <Seo title={title} description={description} />
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Page
