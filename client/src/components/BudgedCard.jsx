export default function BudgetCard({ b, options }) { //b is for budget ;)
    return (
        <div className="mx-14 sm:mx-10 bg-white">
            <div className="px-4 pt-4">
                <div className="grid grid-cols-1">
                    {/* Concept */}
                    <h5 className="text-xl font-bold text-bluegray-600">{b.concept}</h5>

                    {/* Mount */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Mount: </h5>
                        <p className="pl-1 text-blue-400">${b.mount}</p>
                    </div>

                    {/* Type */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Type: </h5>
                        <p className={`${b.type === 'income' ? ('text-green-600') : ('text-red-500')} pl-1`}>{b.type}</p>
                    </div>

                    {/* Category */}
                    <div className="flex mt-2">
                        <h5 className="font-semibold">Category: </h5>
                        <p className="pl-1">{b.category}</p>
                    </div>

                    {/* Date */}
                    <div className="flex mt-2 mb-1">
                        <h5 className="font-semibold">Date: </h5>
                        <p className="pl-1">{b.date}</p>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            {
                options ? (
                    <div className="grid grid-cols-2 px-">
                        <button className="block p-1 texet-center font-bold text-white bg-red-500 hover:bg-red-700">Delete</button>
                        <button className="block p-1 texet-center font-bold text-white bg-blue-500 hover:bg-blue-700">Edit</button>
                    </div>
                ) : (null)
            }
        </div>
    )
}