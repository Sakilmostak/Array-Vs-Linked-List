import {Block} from './Block' // importing the block for array
import { ListBlock } from './ListBlock' // importing the block for linked-list
import './Body.css'

export const Body = () => {
    // storing indexes of block that will be displayed
    var iter = []
    for(let i=0;i<10;i++){
        iter.push(i);
    }

    // filling block of array
    var iterList = iter.map((item) => <Block num={item} add={(item+1)*100}></Block>)
    // filling block of linked list
    var LinkedList = iter.map((item) => <ListBlock num={item+1}></ListBlock>)

    return (
        <div>
            <p className="psection">
                Linear Data Structure is the most commonly used structure found in Computer Science. 
                Implementation of the linear structure in a computer’s memory is easy as the data is organized sequentially.
                The data elements stored in the linear data structure have single relationship between them.
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
            <div className='arrDisplay'>
                <p id='diagramlabel'>data<hr/>address</p>
                {iterList}
            </div>
            <p className="psection">
                Most programming languages follow the standard of 0-based indexing, where the first element is present at the 0th index.
                Most advantageous point of array is that it's data can be accessed in constant time which makes operation like searching very optimal
                (given the address).
            </p>
            <h2 className='artHead'>
                Linked-List:
            </h2>

            <p className='psection'>
                A linked list is a linear data structure that stores a collection of data elements dynamically.
                Nodes represent those data elements, and links or pointers connect each node.
                Each node consists of two fields, the information stored in a linked list and a pointer that stores the address of its next node.
                The last node contains null in its second field because it will point to no node.
                A linked list can grow and shrink its size, as per the requirement.
                It does not waste memory space.
            </p>
            <div className='arrDisplay'>
                {LinkedList}
            </div>
            <p className='psection'>
            Linked lists can be of multiple types: singly, doubly, and circular linked list.
            The power of a linked list comes from the ability to break the chain and rejoin it.
            Doing something similar in an array would have required shifting the positions of all the subsequent elements.
            Apart from that, linked lists are a great way to learn how pointers work. By practicing how to manipulate linked lists, you can prepare yourself to learn more advanced data structures like graphs and trees.
            </p>

        </div>
    )
}