import type { NextPage } from 'next'
import useSWR from 'swr'

import { getNotes } from '../src/api/notes'

import Spinner from '../src/components/Common/Spinner'
import Text from '../src/components/Common/Text'
import NoteCard from '../src/components/Note/NoteCard'
import { customFetcher } from '../src/components/SwrConfig'
import { INote } from '../src/models/Note'
import styles from '../src/styles/Home.module.css'

const Home: NextPage = () => {
    const { data, isValidating, error } = useSWR(
        getNotes,
        customFetcher)
    console.log(isValidating)
    
    //  TODO : Display error page if success is false 
    //  TODO : add a nice search bar to reactively search through the data 
    
    return (
        <div data-testid="home-page" className={styles["home-page"]}>

            { isValidating && !error ? (<div className={styles["spinner-container"]}><Spinner /></div>) :
            
                (data?.data.length > 0 && !isValidating && !error ? 
                    <div className={`${styles["note-card-container"]} ${styles["grid"]} ${styles["wrapper"]}`} >
                        {data.data.map(
                            (note: JSX.IntrinsicAttributes & INote) => 
                                
                                <NoteCard key={note._id}  {...note} />
                        ) 
                        }
                    </div> 
                    : 
                    <Text text='No notes to display' />)}
           
        </div>
    )
}

export default Home
