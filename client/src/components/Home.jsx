import {useSelector} from 'react-redux'
import BudgetCard from './BudgedCard'

export default function Home(){

    const budgets = useSelector(state => state.allBudgets.budgets)
    // Tomar solo los primeros 10!!!
    return(
        budgets.map(item => 
            <BudgetCard b={item} key={item.id}/>
        )
    )
}