import { useSelector } from 'react-redux'
import BudgetCard from './BudgedCard'
import CurrentBalance from './CurrentBalance'

export default function Home() {

    const budgets = useSelector(state => state.allBudgets.budgets)
    // Tomar solo los primeros 10!!!
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto mb-16 mt-4 gap gap-y-4 ">
                {
                    budgets.map(item =>
                        <BudgetCard b={item} key={item.id} />
                    )
                }
            </div>
            <CurrentBalance />
        </div>
    )
}