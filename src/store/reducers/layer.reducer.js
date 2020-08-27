import ACTION from '../actionTypes';

const initialState = {
  layers: [
    {
      id: 0,
      selected: false,
      visible: true,
      title: 'rect',
      shape: {
        name: 'rect',
        type: 'rect',
        x: 40,
        y: 40,
        w: 200,
        h: 200,
        strokeStyle: 'solid',
        strokeWidth: 15,
        strokeColor: '#000000',
        fillColor: '#ff0000',
      },
      keyframes: [
        {
          cursor: 'default',
          type: 'wait',
          val: 300,
        },
        {
          type: 'to',
          data: { scaleX: 2, scaleY: 2 },
          val: 1300,
        },
        {
          type: 'to',
          data: { alpha: 1, x: 700 },
          val: 4100,
        },
        {
          type: 'to',
          data: {
            scaleX: 1, scaleY: 1, y: 500, x: 0,
          },
          val: 6100,
        },
        {
          type: 'to',
          data: { y: 0, x: 0 },
          val: 7100,
        },
      ],
    },
    {
      id: 1,
      selected: false,
      visible: true,
      title: 'circle',
      shape: {
        name: 'circle',
        type: 'circle',
        x: 240,
        y: 240,
        radius: 80,
        strokeStyle: 'solid',
        strokeWidth: 2,
        strokeColor: '#000000',
        fillColor: '#ffff00',
      },
      keyframes: [
        {
          cursor: 'default',
          type: 'wait',
          val: 300,
        },
        {
          type: 'to',
          data: { scaleX: 2, scaleY: 2 },
          val: 1300,
        },
        {
          type: 'to',
          data: { alpha: 1, x: 700 },
          val: 4100,
        },
        {
          type: 'to',
          data: {
            scaleX: 1, scaleY: 1, y: 500, x: 0,
          },
          val: 6100,
        },
        {
          type: 'to',
          data: { y: 0, x: 0 },
          val: 8100,
        },
      ],
    },
  ],
  curLayer: -1,
  maxLayerId: 2,
  maxTime: 8100,
};

export default function layerReducer(state = initialState, action) {
  let newLayers = [];
  switch (action.type) {
    case ACTION.ADD_NEW_LAYER:
      const newLayer = action.data.title ? action.data : {
        ...action.data,
        title: `Layer ${state.maxLayerId}`,
        shape: {
          ...action.data.shape,
          name: `Layer ${state.maxLayerId}`,
        },
        keyframes: [
          { val: 0 },
          { val: 500 },
        ],
      };
      newLayer.id = state.maxLayerId;
      const templateExist = (newLayer.shape && newLayer.shape.type === 'template')
        && state.layers.find((item) => item.shape && item.shape.type === 'template');
      newLayers = templateExist
        ? state.layers.map((item) => (item.shape && item.shape.type === 'template' ? newLayer : item))
        : [...state.layers, newLayer];
      return {
        ...state,
        layers: newLayers,
        maxLayerId: state.maxLayerId + 1,
        curLayer: newLayer.id,
      };
    case ACTION.SET_CUR_LAYER:
      return {
        ...state,
        curLayer: action.curLayer,
      };
    case ACTION.DELETE_LAYER:
      return {
        ...state,
        layers: state.layers.filter((item) => item.id !== action.layerId),
      };
    case ACTION.CHANGE_LAYER_ORDER:
      const indexOfLayer = state.layers.findIndex((item) => item.id === action.layerId);
      const layer1 = state.layers.find((item) => item.id === action.layerId);
      const layer2 = state.layers[indexOfLayer + action.amount];
      newLayers = state.layers.map((item, index) => {
        if (index !== indexOfLayer && index !== indexOfLayer + action.amount) return item;
        if (index === indexOfLayer) return layer2;
        return layer1;
      });
      return {
        ...state,
        layers: newLayers,
      };
    case ACTION.SET_KEY_FRAMES:
      let newMaxTime = action.data[action.data.length - 1].val;
      state.layers.forEach((layer) => {
        if (layer.id !== action.layerId && layer.keyframes
          && newMaxTime < layer.keyframes[layer.keyframes.length - 1].val) {
          newMaxTime = layer.keyframes[layer.keyframes.length - 1].val;
        }
      });
      return {
        ...state,
        layers: state.layers.map((item) => (item.id === action.layerId ? { ...item, keyframes: action.data } : item)),
        maxTime: newMaxTime,
      };
    case ACTION.SET_LAYER_DATA:
      newLayers = state.layers.map((item) => (item.id === action.layerId ? { ...item, ...action.data } : item));
      return {
        ...state,
        layers: newLayers,
      };
    default:
      return state;
  }
}
