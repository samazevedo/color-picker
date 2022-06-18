import {PredefinedSelectorStyled} from './PredefinedSelector.styled';
import {Color} from '../../Interfaces/Color';


const predefinedRows = 3;

interface PredefinedSelectorProps {
    parsedColor: Color
    colors: Array<string>
    onSelect(colors: string): void
}
export const PredefinedSelector = (props: PredefinedSelectorProps) => {
    const { parsedColor, colors, onSelect } = props
    return (
        <PredefinedSelectorStyled>
            <div className="cp-predefined-root"
                style={{
                    height: 2 + 35 * predefinedRows + 'px',
                    width: 16 + 35 * Math.ceil(colors.length / predefinedRows) + 'px'
                }}/>
                {colors.map((color) =>(
                    <button
                        className='cp-color-button'
                        key={color}
                        onClick={(event) => onSelect(color)}
                        style={{
                            border:color === parsedColor?.hex ? '1px solid #000000' : 'none'
                        }}>
                            <div
                                className='cp-preview-color'
                                    style={{
                                        background:color
                                    }}/>
                    </button>
                ))}
        </PredefinedSelectorStyled>
}
