import { useSelector } from 'react-redux'
import BudgetCard from './BudgedCard'
import CurrentBalance from './CurrentBalance'

export default function Home() {

    const budgets = useSelector(state => state.allBudgets.budgets).slice(0,10)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container mx-auto mb-16 mt-4 gap gap-y-4 ">
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