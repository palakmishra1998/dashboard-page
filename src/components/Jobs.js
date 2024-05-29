import { Card } from 'react-bootstrap';
import '../App.css';
import { Gear, HandThumbsUp, Hourglass,  X,} from 'react-bootstrap-icons';
// import * as Icons from 'react-bootstrap-icons';

const Jobs =({name, title}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div>
                        <Gear /> - Pending
                        <Hourglass /> - Waiting
                        <HandThumbsUp /> - Completed
                        <X /> - Failed
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Jobs;