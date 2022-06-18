import { FreeSelector } from './FreeSelector.styled'
import React, { MouseEventHandler } from 'react'
import { Color } from '../../Interfaces/Color'

interface FreeSelectorProps {
    parsedColor: Color
    color: string // convert to HSV
    satCoords: Array<number> // [x,y] coordinates of the saturation circle
    hueCoords: number
    onSaturationChange: MouseEventHandler<HTMLDivElement>
    onHueChange: MouseEventHandler
}

export const FreeSelectorProps = (props: FreeSelectorProps) => {
    const { color, satCoords, hueCoords, onSaturationChange, onHueChange } =
        props
    return (
        <FreeSelector>
            <section className='cp-free-root'>
                <article
                    className='cp-saturation'
                    style={{
                        backgroundColor: `hsl(${parsedColor.hsv.h}, 100%, 50%)`,
                    }}
                    onClick={onSaturationChange}
                >
                    <div
                        className='cp-saturation-indicator'
                        style={{
                            backgroundColor: parsedColor.hex,
                            left: (satCoords?.[0] ?? 0) + '%',
                            top: (satCoords?.[1] ?? 0) + '%',
                        }}
                    />
                </article>
                <article className='cp-hue' onClick={onHueChange}>
                    <div
                        className='cp-hue-indicator'
                        style={{
                            backgroundColor: parsedColor.hex,
                            left: (hueCoords ?? 0) + '%',
                        }}
                    />
                </article>
            </section>
        </FreeSelector>
    )
}
