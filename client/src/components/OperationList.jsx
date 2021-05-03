import OperationCard from './OperationCard'

export default function OperationList({data, options}){

    return(
        <section>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-5">
                {
                    data.map(operation => <OperationCard  operation={operation} options={options}/>)
                }
            </ul>
        </section>
    )
} 