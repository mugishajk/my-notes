import React from 'react'
import styles from '../../../styles/NoteCard.module.css'
import { INote } from '../../../models/Note'
import Button from '../../Common/Button'
import Card from '../../Common/Card'
import Flex from '../../Common/Flex'

import Heading from '../../Common/Heading'
import Link from 'next/link'
import Paragraph from '../../Common/Paragraph'

export default function index({_id,title,author,updatedAt}:INote) {
    return (
        <Card data-testid="note-card" className={styles["note-card"]} 
        >
            <Link href={`/${_id}`}><Heading className={styles["heading"]}>{title}</Heading></Link> 
          
            <Paragraph  >
                {`Author : ${author}`}
            </Paragraph>
           
            <Flex className={styles["button-container"]}>
                <Link href={`/${_id}`}>
                    <Button className={styles["button"]} text="View" variant='primary' />
                </Link>
                <Link href={`/${_id}/edit`}>
                    <Button className={styles["button"]} text="Edit" variant="secondary"/>
                </Link>
            </Flex>
            <Paragraph as='small' >
                {`Last update : ${updatedAt}`}
            </Paragraph>
        </Card>
    )
}