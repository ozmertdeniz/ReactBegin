import React from 'react'
import faker from 'faker'
import Card from '../card/card';
import ApproveCard from '../approve/approve'

class PplCards extends React.Component {
    render() {
        return (<div className='ui four column doubling stackable grid container link cards'>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}
            />
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
            <Card
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                lastName={faker.name.lastName()}
                joinDate={faker.date.past().getFullYear()}
                friendsCount={faker.random.number(500)}
                jobArea={faker.name.jobArea()}>
                <ApproveCard></ApproveCard>
            </Card>
        </div>);
    }
}
export default PplCards;