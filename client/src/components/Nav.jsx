import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

export default function Nav() {
    return (
        <nav className="flex justify-evenly p-4 bg-secondary w-screen">
            <h1 className="font-bold text-xl text-primary">My budgets</h1>
            <MenucomponentDesktop />
            <MenuComponentMobile />
        </nav>
    )
}

function MenucomponentDesktop() {
    return (
        <div className="hidden md:flex">
            <Link to="/"><p className="text-primary font-semibold pr-3 hover:underline">Home</p></Link>
            <Link to="/operations"><p className="text-primary font-semibold pr-3 hover:underline">Budgets</p></Link>
            <p className="text-primary font-semibold hover:underline">Sing out</p>
        </div>
    )
}

function MenuComponentMobile() {
    return (
        <Menu as="div" className="flex-row text-right md:hidden">
            <Menu.Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Menu.Button>
            <Menu.Items className="mt-2 text-stark"> 
            {/* grid grid-cols-1 place-items-end gap gap-y-1 */}
                <Menu.Item className="hover:underline font-bold">
                    {({ active }) => (
                        <Link to="/">
                            <p className="text-primary">Home</p>
                        </Link>
                    )}
                </Menu.Item>
                <Menu.Item className="hover:underline font-bold">
                    {({ active }) => (
                        <Link to="/operations">
                            <p className="text-primary">Budgets</p>
                        </Link>
                    )}
                </Menu.Item>
                <Menu.Item className="hover:underline font-bold cursor-pointer">
                    {({ active }) => (
                        <p className="text-primary">Sing out</p>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}