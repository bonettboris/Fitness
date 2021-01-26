import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
            { exercises.map((item) => {
                return (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        leftColor={item.leftColor}
                        rightColor={item.rightColor}
                    />
                )
            })}
        </div>
)

export default ExerciseList