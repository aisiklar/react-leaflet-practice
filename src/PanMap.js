import { useMap } from 'react-leaflet/hooks'



const PanMap = (props) => {
    console.log('props.changeCoords: ', props.changeCoords);

    const map = useMap()
    map.setView(props.changeCoords, map.getZoom());
    console.log('map center:', map.getCenter())

    return null
}

export default PanMap;