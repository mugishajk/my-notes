/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Cors from 'cors'
import initMiddleware from '../../../src/api/initMiddleware'

// Initialize the cors middleware
const cors = initMiddleware(
 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    Cors({
   
        methods: ['GET', 'POST', 'PUT','DELETE'],
    })
)

export default cors;