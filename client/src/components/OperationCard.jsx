export default function OperationCard({ operation }) {
    return (
        <li className="p-4 m-4 border-2 border-stark rounded-xl text-white md:mx-72">
            <h6 className="font-semibold text-xl text-stark">{operation.concept}</h6>
            <div className="flex flex-wrap justify-between">
                <h6><b className="text-fuschia">Mount:</b> {operation.mount}</h6>
                <h6 ><b className="text-fuschia">Type:</b><p className={`${operation.type==='income' ? 'text-green-500' : 'text-red-500'} inline`}> {operation.type}</p>
                </h6>
            </div>
            <div className="flex flex-wrap justify-between">
                <h6><b className="text-fuschia">Date:</b> {operation.date}</h6>
                <h6><b className="text-fuschia">Category:</b> {operation.category}</h6>
            </div >
        </li>
    )
}