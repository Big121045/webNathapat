import { Component } from "react"
import { Card, CardGroup, Container } from "react-bootstrap"

export class Home extends Component {
    render(){
        return(
            <Container>
                <br></br>
                
                <CardGroup>
                <Card style={{ width: '4rem' }}>
                   
                   <Card.Body>
                        <Card.Title>Standard Methods</Card.Title>
                        <Card.Link href="/bisection">Bisection</Card.Link>
                        <Card.Link href="/falseposition">FalsePosition</Card.Link>
                        <Card.Link href="/onepoint">OnePoint</Card.Link>
                        <Card.Link href="/newtonraphson">NewtonRaphson</Card.Link>
                        <Card.Link href="/secant">Secant</Card.Link>
                    </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                <Card style={{ width: '4rem' }}>
                    <Card.Body>
                        <Card.Title>Matrix</Card.Title>
                        <Card.Link href="/conjugate">Conjugate</Card.Link>
                        <Card.Link href="/cramer">Cramer's Rule</Card.Link>
                        <Card.Link href="/gauss">Gauss Elimination</Card.Link>
                        <Card.Link href="/jacobi">Jacobi </Card.Link>
                        <Card.Link href="/seidel">Gauss Seidel </Card.Link>
                    </Card.Body>
                </Card>
                </CardGroup>
                <CardGroup>
                <Card style={{ width: '4rem' }}>
                    <Card.Body>
                    <Card.Title>Interpolation Methods</Card.Title>
                        <Card.Link href="/lagrange">Lagrange</Card.Link>
                        <Card.Link href="/spline">Spline</Card.Link>
                    </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            
        ) 
    }
}