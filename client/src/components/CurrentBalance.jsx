import { useSelector } from 'react-redux'

export default function CurrentBalance() {

    let currentBalance = useSelector(state => state.allBudgets.currentBalance)

    return (
        <div className="fixed w-screen mx-auto bottom-0 py-4 text-center text-white bg-warmgray-700">
            <div className="flex justify-center">
                <p className="text-xl font-bold pr-1">Current Balance:</p>
                <p className={`${currentBalance > 0 ? ('text-green-400') : ('text-red-500')} text-xl font-bold `}>${currentBalance}</p>
            </div>
        </div>
    )
}