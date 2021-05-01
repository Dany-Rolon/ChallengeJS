import OperationCard from './OperationCard'

export default function OperationList({data, options}){

    return(
        <section>
            <ul className="container mx-auto grid grid-cols-1">
                {
                    data.map(operation => <OperationCard  operation={operation} options={options}/>)
                }
            </ul>
        </section>
    )
} 