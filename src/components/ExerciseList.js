import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
            { exercises.map((item) => {
                return (
                    <Card
                        key={item.id}
                        {...item}
                    />
                )
            })}
    </div>
)

export default ExerciseList