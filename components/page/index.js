import Seo from '../seo'
import Navbar from '../navbar/index'
import Footer from '../footer/index'

const Page = ({ title, description, children }) => {
    return (
        <div className="mx-auto flex justify-center flex-col max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl min-h-screen">
            <Seo title={title} description={description} />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Page
