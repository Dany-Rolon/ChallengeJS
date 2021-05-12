import {useSelector} from 'react-redux'

export default function Home(){

    const budgets = useSelector(state => state.allBudgets.budgets)
    console.log(budgets);
    return(
        budgets.map(item => 
            <BudgetCard b={item} key={item.id}/>
        )
    )

    function BudgetCard({b}){ //b is for budget ;)
        return(
            <>
                <h5>Concept</h5>
                <p>{b.concept}</p>
                <h5>Mount</h5>
                <p>{b.mount}</p>
                <h5>Type</h5>
                <p>{b.type}</p>
                <h5>Category</h5>
                <p>{b.category}</p>
                <h5>Date</h5>
                <p>{b.date}</p>
                <p>--------------------</p>
            </>
        )
    }
}