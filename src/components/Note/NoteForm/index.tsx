/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { INote } from "../../../models/Note"
import Field from "../../Common/Field"
import Switch from "../../Common/Switch"
import styles from '../../../styles/NoteForm.module.css'
import { ChangeEvent, SyntheticEvent, useState } from "react"
import Textarea from "../../Common/Textarea"
import Label from '../../Common/Label'
import Heading from "../../Common/Heading"
import Button from "../../Common/Button"
import { newNote, setNote } from "../../../api/notes"
import { useRouter } from "next/router"
import { formatDate } from "../../../utils/date"

interface NoteFormProps {
    note?:INote
}

// TODO: form tests

const NoteForm = ({note}: NoteFormProps) => {
    const [title, setTitle] = useState<string>(note?.title || "")
    const [description, setDescription] = useState<string>(note?.description || "")
    const [author, setAuthor] = useState<string>(note?.author || "")
    const [isPrivate, setIsPrivate] = useState<boolean>(note?.isPrivate || false)
    const [expires, setExpires] = useState<boolean>(note?.expireAt ? true : false)
    const [expiryDate, setExpiryDate] = useState<Date | null | string>(note?.expireAt || null)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const router = useRouter()

    const minDate = new Date();
    // add a day
    minDate.setDate(minDate.getDate() + 1);

    const handleSubmit = async (e : SyntheticEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        const body = {
            ...note,
            title,
            description,
            author,
            isPrivate,
            expireAt: expires && expiryDate ? expiryDate : null,
            schema_version: "2"
            
        }
        const options = {
            "method": note?._id ? "PUT":'POST',
            'headers': {
                "Accept": "application/json",
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(body)
        };
        if (note?._id) {
            try {
                await setNote(note._id,options);
                void router.replace(`${router.basePath}/${note._id}`)
            } catch (error) {
                console.error(error)
            }finally{
                setIsSubmitting(false)
            }
           
        } else {
           
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const note = await newNote(options);
                void router.replace(`${router.basePath}/${note?._id}`)
                
            } catch (error) {
                console.error(error)
            }finally{
                setIsSubmitting(false)
            }

        }
    }   

    return (
        <form data-testid="note-form" className={`${styles["form"]}`} onSubmit={handleSubmit}>
            <Heading className={`${styles["heading"]}`} color="primary">
                My  Note
            </Heading>
            <div className={`${styles["field"]}`}>
                <Field data-testid="note-form-title" label="Title" name="title" maxlength="100" defaultValue={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} required autofocus />
            </div>
            <div className={`${styles["field"]}`}>
                <Label>Description</Label>
                <Textarea data-testid="note-form-description" name="description" maxLength={3000} defaultValue={description} rows={8} onChange={(e: SyntheticEvent) => setDescription((e.target as HTMLInputElement).value)} required />
            </div>
            <div className={`${styles["field"]}`}>
                <Field data-testid="note-form-author" label="Author" name="author" defaultValue={author} onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} required />
            </div>
            <div className={`${styles["field"]}`}>
                <Switch
                    data-testid="note-form-expires"
                    label="Expires"
                    defaultChecked={expires}
                    onChange={e => setExpires(e.target.checked)}
                    sx={{
                        "bakgroundColor": 'gray',
                        'input:checked ~ &': {
                            backgroundColor: 'primary',
                            color:"white"
                        },
                    }}
                
                />
            </div>
            {expires ? <div className={`${styles["field"]}`}>
                <Field data-testid="note-form-expiry-date" label="Expiry Date" name="expiry-date" type="date" defaultValue={formatDate(expiryDate ? new Date(expiryDate) : new Date())} min={minDate.toISOString().split("T")[0]} onChange={(e: SyntheticEvent) => setExpiryDate((e.target as HTMLInputElement).value)}/>
            </div> : ""}
            <div className={`${styles["field"]}`}>
                <Switch

                    data-testid="note-form-is-private"
                    label="Private Note"
                    defaultChecked={isPrivate}
                    onChange={e => setIsPrivate(e.target.checked)}
                    sx={{
                        "bakgroundColor": 'gray',
                        'input:checked ~ &': {
                            backgroundColor: 'secondary',
                            color:"white"
                        },
                    }}
                
                />
            </div>
            <Button data-testid="note-form-submit-button" disabled={isSubmitting} text={note?._id ? "Save Changes" : "Create"} type="submit" />
        </form>
    )
}

export default NoteForm
