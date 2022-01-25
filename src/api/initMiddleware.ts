// Helper method to wait for a middleware to execute before continuing

import { NextApiRequest, NextApiResponse } from "next"

// And to throw an error when an error happens in a middleware
export default function initMiddleware(middleware: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result: unknown) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
}