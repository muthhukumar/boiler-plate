import DonutSmallIcon from '@material-ui/icons/DonutSmall'

const Navbar = () => {
    return (
        <div className="flex p-4 bg-teal-500 shadow-md text-4xl items-center justify-center text-white my-2 rounded-lg">
            <DonutSmallIcon />
            <h2 className="text-center font-bold ml-2">Boiler Plate</h2>
        </div>
    )
}

export default Navbar
