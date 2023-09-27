import { Link } from 'react-router-dom';

export const MaxCards = () => {
    return (
        <div className="flex flex-col md:mt-20 mx-4 justify-center text-center">
            <h3 className="font-bold tracking-wide text-2xl mb-4">Max limit reach!</h3>
            <p>You added a new card and now you have reach the number of maximum cards in your wallet.</p>
                <p className='mt-4'>
                 If you need to add another, go to <Link to="/cards" className='text-purple-600'>"Cards"</Link> and delete one card from your inactive cards. 
                </p>
        </div>
    )
}