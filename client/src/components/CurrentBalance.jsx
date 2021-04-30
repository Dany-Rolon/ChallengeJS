export default function CurrentBalance({balance}){

    return(
        <footer className="w-screen py-4 bg-jewel text-center text-white font-semibold sticky bottom-0">
            <h1 className="text-xl"> Current balance: $<p className={`${balance<0 ? 'text-red-300' : 'text-green-300'} inline`}> {balance} </p></h1>
        </footer>
    )
} 