import { ClimbingBoxLoader } from "react-spinners"

export default function loading() {
    return (
        <div className="bg-white bg-opacity-60 z-50 w-full h-full fixed top-0 left-0 flex flex-row justify-center items-center">
            <div>
                <ClimbingBoxLoader color="#1c8549" size={15}/>
            </div>
        </div>
    );
}