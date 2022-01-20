import React from 'react'
import styles from '../../../styles/NotePage.module.css'
import { INote } from '../../../models/Note'
import Button from '../../Common/Button'
import Card from '../../Common/Card'
import Heading from '../../Common/Heading'
import Link from 'next/link'
import Paragraph from '../../Common/Paragraph'
import Flex from '../../Common/Flex'
import { useRouter } from 'next/router'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { baseUrl } from '../../../api/common'

export default function NotePage({_id,title,description,expiryDate, author,updatedAt,createdAt}:INote) {
    const router = useRouter();
    // TODO: Confirm delete modal with swal then proceed to delete if confirm
    const handleDelete = (e) => {
        console.log("delete request")
    }

    const handleGetLink = (e) => {
        console.log("delete request")
        console.log(router)
    }
    
    return (
        <Card data-testid="note-page" className={styles["note-page"]} 
        >
            <Heading className={styles["heading"]}>{title}</Heading>
            <Paragraph >
                {description}
            </Paragraph>
            <Paragraph >
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
                    <Button className={styles["button"]} text="Copy Link" variant="primary" onClick={handleGetLink}/>
                </CopyToClipboard>
            </Flex>
           
        </Card>
    )
}
