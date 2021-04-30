import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

export default function Nav() {
    return (
        <nav className="flex justify-evenly p-4 bg-fuschia">
            <h1 className="font-bold text-xl text-stark">My budgets</h1>
            <MenuComponent />
        </nav>
    )
}

function MenuComponent() {
    return (
        <Menu as="div" className="grid grid-cols-1 place-items-end">
            <Menu.Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Menu.Button>
            <Menu.Items className="grid grid-cols-1 place-items-end gap gap-y-1 mt-2 text-stark">
                <Menu.Item className="hover:underline font-bold">
                    {({ active }) => (
                        <Link to="/" as="a">Home</Link>
                    )}
                </Menu.Item>
                <Menu.Item className="hover:underline font-bold">
                    {({ active }) => (
                        <Link to="/operations" as="a">Operations</Link>
                    )}
                </Menu.Item>
                <Menu.Item className="hover:underline font-bold cursor-pointer">
                    {({ active }) => (
                        <p>Sing out</p>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}