import React, { useState } from 'react'
import styles from '../../../styles/NotePage.module.css'
import { INote } from '../../../models/Note'
import Button from '../../Common/Button'

import Heading from '../../Common/Heading'
import Link from 'next/link'
import Paragraph from '../../Common/Paragraph'
import Flex from '../../Common/Flex'
import { useRouter } from 'next/router'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { baseUrl } from '../../../api/common'
import { deleteNote } from '../../../api/notes'

export default function NotePage({_id,title,description,expiryDate, author,updatedAt,createdAt}:INote) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false)
    // TODO: Confirm delete modal with swal then proceed to delete if confirm
    const handleDelete = async (e) => {
        setIsDeleting(true)
        try {
            const {success} = await deleteNote(_id)
            if (success) {
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsDeleting(false)
        }

    }
   
    return (
        <div data-testid="note-page" className={styles["note-page"]} >
            <Heading className={styles["heading"]}>{title}</Heading>
            <Paragraph className={styles["description"]}>
                {description}
            </Paragraph>
            <Paragraph className={styles["author"]}>
                {`Author : ${author}`}
            </Paragraph>
            <Paragraph as='small' >
                {`Creation : ${createdAt}`}
            </Paragraph>
            <Paragraph as='small' >
                {`Last update : ${updatedAt}`}
            </Paragraph>
            {expiryDate ?
                <Paragraph as='small' >
                    {`Expires on : ${expiryDate}`}
                </Paragraph>: ""}
            <Flex className={styles["button-container"]}>
                <Link href={`/${_id}/edit`}>
                    <Button className={styles["button"]} text="Edit" variant="secondary"/>
                </Link>
            
                <Button className={styles["button"]} text="Delete" variant="error" onClick={handleDelete}/>
                {/* TODO: cuter alert */}
                <CopyToClipboard text={`${baseUrl}/${_id}`}
                    onCopy={() => alert("link copied !")}>
                    <Button className={styles["button"]} text="Copy Link" variant="primary"/>
                </CopyToClipboard>
            </Flex>
           
        </div>
    )
}
