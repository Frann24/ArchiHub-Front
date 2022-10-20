import { Link } from "react-router-dom"

const CancelPaymentError = () =>{
    return(
        <div>
            <div>
            <div>
            The requested operation could not be performed. 
            Wait a few minutes and try again
            </div>
            <div>
                <Link to="/Home">
                    Home
                </Link>
            </div>
            </div>
        </div>
    )
}

export default CancelPaymentError;