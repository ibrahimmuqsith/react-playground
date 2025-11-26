import React, { useEffect, useState } from "react";
import { LIMIT_PRODUCTS_LIST, ENDPOINT_PRODUCTS_LIST } from "../utils/constants";

const Typeahead = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [isloadin, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller

        const fetchData = async () => {
            try {
                /**
                 * in the fetch(), we pass signal obj as the 2nd parameter.
                 * the signal obj from the Abort controller acts as delimitter.
                 */
                let url = `${ENDPOINT_PRODUCTS_LIST}${query}&limit=${LIMIT_PRODUCTS_LIST}`
                const data = await fetch(url, { signal: controller.signal })
                const jsonResp = await data.json()
                setResults(jsonResp.products)
            } catch (err) {
                /**
                 * by def, when the second char is typed, first call is aborted.
                 * then an AbortError is thrown. In order to omit that error,
                 * we catch all errors other than AbortError.
                 */
                if (err.name !== 'AbortError') {
                    console.error(err)
                }
            }
        }

        /**
         * creating a debounce to call the api on interval of 300ms
         */
        const timerId = setTimeout(() => {
            fetchData()
        }, 300)

        return () => {
            /**
             * clearing the timeout & the aborting the api calls
             * when the component is removed from DOM.
             */
            clearTimeout(timerId)
            controller.abort()
        }
    }, [query])


    return (
        <div className="Typeahead w-1/3 m-auto">
            <input
                name="search"
                className="border rounded p-2 m-2 w-full"
                placeholder="Joogle Search ...."
                type="text"

                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="">
                {results?.map(item => (
                    <li
                        className="text-left list-none ml-4 m-1 bg-gray-100 p-1 rounded hover:bg-gray-200 cursor-pointer"
                        key={item.id}
                    >
                        {item.title}
                    </li>
                ))}

            </div>
        </div>
    )
}

export default Typeahead
