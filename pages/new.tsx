import type { NextPage } from "next"
import styles from '../src/styles/New.module.css'

import NoteForm from "../src/components/Note/NoteForm"
const New: NextPage = () => {
    return (
        <div data-testid="new-page" className={styles["new-page"]}>
            <NoteForm note={{title:"",description:"",author:"",isPrivate:false}} />
        </div>
    )
}

export default New
