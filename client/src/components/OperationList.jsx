import OperationCard from './OperationCard'

export default function OperationList({data}){

    return(
        <section>
            <ul className="container mx-auto grid grid-cols-1">
                {
                    data.map(operation => <OperationCard  operation={operation}/>)
                }
            </ul>
        </section>
    )
} 