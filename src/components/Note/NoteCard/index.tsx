import React from 'react'
import styles from '../../../styles/NoteCard.module.css'
import { INote } from '../../../models/Note'
import Button from '../../Common/Button'
import Card from '../../Common/Card'
import Flex from '../../Common/Flex'
import Heading from '../../Common/Heading'

export default function index({_id,title}:INote) {
    return (
        <Card data-testid="note-card" className={styles["note-card"]}>
            <Heading className={styles["heading"]}>{title}</Heading>
            <Flex className={styles["button-container"]}>
                <Button className={styles["button"]} text="View"/>
                <Button className={styles["button"]} text="Edit"/>
            </Flex>
        </Card>
    )
}
