export default function CurrentBalance({balance}){

    return(
        <footer className="w-screen py-4 bg-secondary text-center text-primary font-semibold sticky bottom-0">
            <h1 className="text-2xl title text-primary"> Current balance:<p className={`${balance<0 ? 'text-red-600' : 'text-green-600'}`}> ${balance} </p></h1>
        </footer>
    )
} 