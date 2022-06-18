export enum ColorPickerVariant {
    Predefined = 'predefined',
    Free = 'free',
}

interface ColorPickerProps {
    color: string
    colors: Array<string>
    onChange(color: string): void
    variant: ColorPickerVariant
}

export const ColorPicker = (props: ColorPickerProps) => {
    const { color, colors, onChange, variant } = props
}
