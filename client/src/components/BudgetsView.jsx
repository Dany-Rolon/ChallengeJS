import {React, useState} from 'react'
import {useSelector} from 'react-redux'
import BudgetCard from './BudgedCard'

export default function BudgetsView(){
    
    const budgets = useSelector(state => state.allBudgets.budgets)
    const [type, setType] = useState('all')
    const [category, setCategory] = useState('all')

    function filterByType(item){
        if(type !== 'all' ){
            return item.type === type
        }else {
            return item
        }
    }

    function filterByCategory(item){    
        if(category !== 'all'){
            return item.category === category
        } else {
            return item
        }
    }

    return(
        <div>
            <FilterMenu />
            {budgets.filter(filterByType).filter(filterByCategory).map(item => <BudgetCard b={item}  key={item.id} options={true}/>)}
        </div>
    )

    function FilterMenu(){

        function onChangeType(e){
            setType(e.target.value)
        }

        function onChangeCategory(e){
            setCategory(e.target.value)
        }

        return(
            <div>
                <h6>Filter by Type:</h6>
                <select value={type} onChange={onChangeType}>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <h6>Filter by Category</h6>
                <select value={category} onChange={onChangeCategory}>
                    <option value="all">All</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="services">Services</option>
                    <option value="job">Job</option>
                    <option value="others">Others</option>
                </select>
            </div>
        )
    }
} 