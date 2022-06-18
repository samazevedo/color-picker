import styled from 'styled-components'

export const ColorPickerStyled = styled.main`
    & .cp-container {
        padding: 12px;
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        width: fit-content;
    }
    & .cp-container::-webkit-scrollbar {
        display: none;
    }
    & .cp-input-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2px;
    }
    & .cp-input-group {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 8px;
        align-items: center;
    }
    & .cp-color-preview {
        /*shadow so we can see white agains white */
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
            0 1px 1px 0 rgba(0, 0, 0, 0.014), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    input {
        padding: 4px 6px;
        label,
        input {
            display: block;
        }
        & .cp-input-label {
            font-size: 12px;
        }
        & .cp-hex-input {
            width: 60px;
        }
        & .cp-rgb-input {
            width: 30px;
        }
    }
`
