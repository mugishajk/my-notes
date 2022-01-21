import type { NextPage } from "next"
import styles from '../../src/styles/EditNote.module.css'
import useSWR from 'swr'
import NoteForm from "../../src/components/Note/NoteForm"
import { useRouter } from "next/router"
import { customFetcher } from "../../src/components/SwrConfig"
import { getNote } from "../../src/api/notes"
import Spinner from "../../src/components/Common/Spinner"
import Text from '../../src/components/Common/Text'
const EditNote: NextPage = () => {
    const router = useRouter()
    const { id  } = router.query
    const { data, isValidating, error } = useSWR(
        getNote(id?.toString()),
        customFetcher)
    return (
        <div data-testid="edit-page" className={styles["edit-page"]}>

            { isValidating && !error ? (<Spinner />) :
            
                (data?.data && !isValidating && !error ? 
                    <NoteForm note={{...data.data}} />
                    : 
                    <Text text='No note to display' />)}
            
        </div>
    )
}

export default EditNote