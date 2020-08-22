import ACTION from '../actionTypes';

const initialState = {
  layers: [
    {
      id: 0,
      selected: false,
      hidden: false,
      title: 'circle',
      shape: {
        type: 'circle',
        x: 140,
        y: 140,
        radius: 40,
        fillColor: 'red',
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
          val: 5100,
        },
        {
          type: 'to',
          data: {
            scaleX: 1, scaleY: 1, y: 500, x: 0,
          },
          val: 8100,
        },
        {
          type: 'to',
          data: { y: 0, x: 0 },
          val: 10100,
        },
      ],
    },
  ],
  curLayer: {},
  maxLayerId: 1,
  maxTime: 10100,
};

export default function layerReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.ADD_NEW_LAYER:
      const newLayer = action.data.name ? action.data : {
        ...action.data,
        title: `Layer ${state.maxLayerId}`,
        keyframes: [
          { val: 0 },
          { val: 500 },
        ],
      };
      newLayer.id = state.maxLayerId;
      return {
        ...state,
        layers: [...state.layers, newLayer],
        maxLayerId: state.maxLayerId + 1,
      };
    case ACTION.SET_CUR_LAYER:
      return {
        ...state,
        curLayer: action.data,
        layers: state.layers.map((item) => (item.id === action.data.id ? action.data : item)),
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
      const newLayers = state.layers.map((item, index) => {
        if (index !== indexOfLayer && index !== indexOfLayer + action.amount) return item;
        if (index === indexOfLayer) return layer2;
        return layer1;
      });
      return {
        ...state,
        layers: newLayers,
      };
    case ACTION.SET_KEY_FRAMES:
      const newMaxTime = action.data.reduce((max, item) => (max > item.val ? max : item.val), 0);
      return {
        ...state,
        layers: state.layers.map((item) => (item.id === action.layerId ? { ...item, keyframes: action.data } : item)),
        maxTime: newMaxTime,
      };
    default:
      return state;
  }
}
