import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 2px solid purple;
    padding: 25px;
    .photo-info {
        border: 2px solid pink;
        margin: 25px;
        background-color: purple;
        text-align: center;
        font-size: 1.25rem;
        color: white;
        h1 {
            color: cyan;
            padding: 5px;
        }
        p {
            &::first-line {
              padding: 8px;
              font-size: 1.5em;  
            }
        }
    }
    .photo {
        border: 1px solid gray;
        padding: 8px;
        box-sizing: border-box;
    }
    .photo-misc div {
        padding: 5px;
        color: purple;
        font-size: 1.15rem;
    }
`

export default function Photo(props) {

    return (
        <Card className='card'>
            <div className='photo-info'>
                <h1>{props.photo.title}</h1>
                <p>{props.photo.explanation}</p>  
            </div>
            <img className='photo' src={props.photo.url}></img>
            <div className='photo-misc'>
                <div>Date of photo: {props.photo.date}</div>
                <div>Copyright: {props.photo.copyright}</div>
            </div>
        </Card>
    )
}