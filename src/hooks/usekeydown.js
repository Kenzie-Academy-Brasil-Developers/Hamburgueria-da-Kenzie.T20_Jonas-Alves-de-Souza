import { useEffect, useRef } from 'react'

export const useKeydown = (KeyId, callback) => {
    const ref = useRef(null)

    useEffect( 
        ()=>{
            const handleKeydown = (event) =>{
                if(event.key === KeyId){
                    if(callback) callback(ref.current) 
                }
                console.log(event.key)
            }

            window.addEventListener('keydown', handleKeydown)

            return () => {
                window.removeEventListener('keydown', handleKeydown)
            }
        },
        [] )

    return ref
}