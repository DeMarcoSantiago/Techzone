import { useEffect, useState } from "react"

const StarScore = ({ score: score }: { score: number }) => {

    const [arrayStar, setArrayStar] = useState<number[]>([])
    const [arrayEmptyStar, setArrayEmptyStar] = useState<number[]>([])


    const fillStars = () => {
        for (let i = 1; i <= score; i++) {
            setArrayStar(prevState => ([...prevState, i]))
        }
        for (let i = score+1; i <= 5; i++) {
        setArrayEmptyStar(prevState => ([...prevState, i]))
        }
    }

    useEffect(() => {
        fillStars()
    }, [])


    return (
        <div className="flex">
            {arrayStar.map((star) => {
                return (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 stroke-yellow-300 fill-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                    </div>
                )

            })}
            {arrayEmptyStar.map((star) => {
                return (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 stroke-yellow-300  ">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                    </div>
                )

            })}
        </div>
    )
}

export default StarScore;