import './Body.css'

export const Body = () => {
    return (
        <div>
            <p className="psection">
                Linear Data Structure is the most commonly used method found in Computer Science. 
                Array as well as Linked-List are the bane of linear data structure. 
                In this article, we will distinguish between the both and set out to see the benefit of both world.
            </p>
            <h2 className='artHead'>
                Array:
            </h2>
            <p className="psection">
            Array is a container which can hold a fix number of items of same data type.
            It is created by assigning pointer to a contiguous block of memory. The memory is divided into fixed length buckets
            depending on the data type used. The pointer is used to access the data present at each bucket.
            </p>
        </div>
    )
}