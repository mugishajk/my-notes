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

import { deleteNote } from '../../../api/notes'
import { baseUrl } from '../../../../pages/_app'
import { formatDate } from '../../../utils/date'

export default function NotePage({_id,title,description,expireAt, author,updatedAt,createdAt}:INote) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false)
    // TODO: Confirm delete modal with swal then proceed to delete if confirm
    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const {success} = await deleteNote(_id || "")
            if (success) {
                void router.push("/")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsDeleting(false)
        }

    }
    console.log(Date.now())
   
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
                {`Created on : ${createdAt ? formatDate(createdAt) : ""}`}
            </Paragraph>
            <Paragraph as='small' >
                {`Last update : ${updatedAt ? formatDate(updatedAt) : ""}`}
            </Paragraph>
            {expireAt ?
                <Paragraph as='small' >
                    {`Expires on : ${formatDate(expireAt)}`}
                </Paragraph>: ""}
            <Flex className={styles["button-container"]}>
                <Link href={`/${_id|| ""}/edit`} passHref>
                    <Button className={styles["button"]} text="Edit" variant="secondary"/>
                </Link>
            
                <Button className={styles["button"]} disabled={isDeleting} text={isDeleting ? "Deleting..." :"Delete"} variant="error" onClick={handleDelete}/>
                {/* TODO: cuter alert */}
                <CopyToClipboard text={`${baseUrl}/${_id || ""}`}
                    onCopy={() => alert("link copied !")}>
                    <Button className={styles["button"]} text="Copy Link" variant="primary"/>
                </CopyToClipboard>
            </Flex>
           
        </div>
    )
}
