import { ColorPicker, ColorPickerVariant } from './components/ColorPicker'
import { useCallback, useState } from 'react'

export default function App() {
    const [color, setColor] = useState('#ffffff')

    const handleChange = useCallback((color: string) => {
        setColor(color)
    }, [])

    return (
        <>
            <ColorPicker
                color={color}
                onChange={handleChange}
                variant={ColorPickerVariant.Predefined}
            />

            <ColorPicker
                color={color}
                onChange={handleChange}
                variant={ColorPickerVariant.Free}
            />
        </>
    )
}
