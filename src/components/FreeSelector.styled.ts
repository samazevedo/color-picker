import styled from 'styled-components'

export const FreeSelector = styled.main`
    & .cp-saturation {
        width: 100%;
        height: 150px;
        // smooth representation of brightness which we orvelay with an inline background-color for saturation
        background-image: linear-gradient(transparent, black),
            linear-gradient(to right, white, transparent);
        border-radius: 4px;
        // this allows us to position an absolute indicator over the map
        position: relative;
        cursor: crosshair;
    }
    & .cp-hue {
        width: 100%;
        height: 12px;
        // this covers the full rande of hues
        background-image: linear-gradient(
            to right,
            #ff0000,
            #ffff00,
            #00ff00,
            #00ffff,
            #0000ff,
            #ff00ff,
            #ff0000
        );
        border-radius: 999px;
        // this allows us to position an absolute indicator over the map
        position: relative;
        cursor: crosshair;
    }
    & .cp-free-root {
        display: grid;
        grid-gap: 8px;
        margin-bottom: 16px;
        max-width: 100%;
        width: 400px;
    }

    & .cp-saturation {
        width: 100%;
        height: 150px;
        background-image: linear-gradient(transparent, black),
            linear-gradient(to right, white, transparent);
        border-radius: 4px;
        position: relative;
        cursor: crosshair;
    }
    & .cp-saturation-indicator {
        width: 15px;
        height: 15px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        transform: translate() (-7.5px, -7.5px);
        position: absolute;
    }
    & .cp-hue {
        width: 100%;
        height: 12px;
        background-image: linear-gradient() (
          to right, 
          #ff0000
          #ffff00
          #00ff00
          #00ffff
          #0000ff
          #ff00ff
          #ff0000
          );
          border-radius: 999px;
          position: relative;
          cursor: crosshair;
        }
        & .cp-hue-indicator {
          width: 15px;
          height: 15px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          transform: translate() (-7.5px, -7.5px);
          position: absolute;
        }
    }
`
