import ClipLoader from 'react-spinners/ClipLoader'

export default function Loading(){
    return(
        <div className="fixed w-screen h-screen top-0 left-0 bg-white bg-opacity-60">
            <div className="grid grid-cols-1 w-full h-full justify-items-center place-content-center">
                <ClipLoader color={"#44403C"} loading={true} size={150} />
            </div>
        </div>
    )
}