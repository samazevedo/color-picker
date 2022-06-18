import styled from 'styled-components'

export const PredefinedSelectorStyled = styled.main`
    & .cp-predefined-root {
        padding-bottom: 16px;
        display: flex;
        flex-direction: column;
        max-width: 100%;
        min-width: 200px;
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    & .cp-predefined-root::-webkit-scrollbar {
        display: none;
    }

    & .cp-color-button {
        width: 37px;
        padding: 5px;
        border-radius: 4px;
        background-color: inherit;
    }
    & .cp-preview-color {
        /*shadow so we can see white agains white*/
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
            0 1px 1px 0 rgba(0, 0, 0, 0.014), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
`
