import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CreateCardForm from "../components/screens/home/create-card-forms/CreateCardForm.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CreateCardForm">
                <CreateCardForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews