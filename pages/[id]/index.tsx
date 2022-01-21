import type { NextPage } from "next"
import { useRouter } from "next/router"
import useSWR from "swr"
import { getNote } from "../../src/api/notes"
import Spinner from "../../src/components/Common/Spinner"
import { customFetcher } from "../../src/components/SwrConfig"
import styles from '../../src/styles/ViewNote.module.css'
import Text from '../../src/components/Common/Text'
import NotePage from "../../src/components/Note/NotePage"
const ViewNote: NextPage = () => {
    const router = useRouter()
    const { id  } = router.query
    const { data, isValidating, error } = useSWR(
        getNote(id?.toString()),
        customFetcher)

    return (
        <div data-testid="view-note-page" className={styles["view-note"]}>
            { isValidating && !error ? (<Spinner />) :
            
                (data?.data && !isValidating && !error ? 
                    <NotePage {...data.data} />
                    : 
                    // TODO : Cuter no notes to display 
                    <Text text='No note to display' />)}

        </div>
    )
}

export default ViewNote
