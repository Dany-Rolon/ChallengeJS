import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import {SignOut} from '../helpers/userHelper'

export default function Nav({setThereIsUser}) {
    return (
        <nav className="flex justify-between p-4 bg-secondary w-screen">
            <h1 className="font-bold text-2xl text-bg_1 title italic">My budgets.</h1>
            <MenucomponentDesktop />
            <MenuComponentMobile />
        </nav>
    )

    function onClick(){
        SignOut(setThereIsUser)
    }

    function MenucomponentDesktop() {
        return (
            <div className="hidden md:flex">
                <Link to="/"><p className="text-xl text-primary font-semibold pr-3 hover:underline">Home</p></Link>
                <Link to="/operations"><p className="text-xl text-primary font-semibold pr-3 hover:underline">Budgets</p></Link>
                <p onClick={onClick} className="text-xl text-primary font-semibold cursor-pointer hover:underline">Sign out</p>
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
                                <p className="text-primary text-xl">Home</p>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item className="hover:underline font-bold">
                        {({ active }) => (
                            <Link to="/operations">
                                <p className="text-primary text-xl">Budgets</p>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item className="hover:underline font-bold cursor-pointer">
                        {({ active }) => (
                            <p onClick={onClick} className="text-xl text-primary font-semibold cursor-pointer hover:underline">Sign out</p>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        )
    }
}

