import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BudgetCard from './BudgedCard'

export default function BudgetsView() {

    const budgets = useSelector(state => state.allBudgets.budgets)
    const [type, setType] = useState('all')
    const [category, setCategory] = useState('all')

    function filterByType(item) {
        if (type !== 'all') {
            return item.type === type
        } else {
            return item
        }
    }

    function filterByCategory(item) {
        if (category !== 'all') {
            return item.category === category
        } else {
            return item
        }
    }

    return (
        <div>
            <FilterMenu />
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 container mx-auto mb-14 mt-4 gap gap-y-4">
                {budgets.filter(filterByType).filter(filterByCategory).map(item => <BudgetCard b={item} key={item.id} options={true} />)}
            </div>
        </div>
    )

    function FilterMenu() {
        function onChangeType(e) {
            setType(e.target.value)
        }
        function onChangeCategory(e) {
            setCategory(e.target.value)
        }
        return (
            <div className="sticky top-16">
                <div className="flex justify-evenly bg-warmgray-700 pb-2">
                    <div>
                        <h6 className="text-white font-semibold">Filter by Type:</h6>
                        <select value={type} onChange={onChangeType} className="bg-warmgray-500 text-white rounded-md">
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold">Filter by Category</h6>
                        <select value={category} onChange={onChangeCategory} className="bg-warmgray-500 text-white rounded-md">
                            <option value="all">All</option>
                            <option value="food">Food</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="services">Services</option>
                            <option value="job">Job</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                <Link to="/createBudget" className="text-white font-bold ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 border-4 rounded-md mt-3 hover:bg-white hover:text-warmgray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
                </div>
            </div>
        )
    }
}