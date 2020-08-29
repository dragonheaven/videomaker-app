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
        w: 150,
        h: 150,
        strokeStyle: 'solid',
        strokeWidth: 15,
        strokeColor: '#000000',
        fillColor: '#ff0000',
      },
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
    },
  ],
  keyframes: [
    {
      layerId: 0,
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
          data: { alpha: 1, x: 990 },
          val: 4100,
        },
        {
          type: 'to',
          data: {
            scaleX: 1, scaleY: 1, y: 640, x: 290,
          },
          val: 6100,
        },
        {
          type: 'to',
          data: { y: 240, x: 290 },
          val: 7100,
        },
      ],
    },
    {
      layerId: 1,
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
          data: { alpha: 1, x: 940 },
          val: 4100,
        },
        {
          type: 'to',
          data: {
            scaleX: 1, scaleY: 1, y: 740, x: 240,
          },
          val: 6100,
        },
        {
          type: 'to',
          data: { y: 240, x: 240 },
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
  let newMaxTime;
  switch (action.type) {
    case ACTION.ADD_NEW_LAYER:
      const newLayer = action.data.title ? action.data : {
        ...action.data,
        title: `Layer ${state.maxLayerId}`,
        shape: {
          ...action.data.shape,
          name: `Layer ${state.maxLayerId}`,
        },
      };
      newLayer.id = state.maxLayerId;
      return {
        ...state,
        layers: [...state.layers, newLayer],
        maxLayerId: state.maxLayerId + 1,
        keyframes: [...state.keyframes, { layerId: newLayer.id, keyframes: action.keyframes }],
        curLayer: newLayer.id,
      };
    case ACTION.SET_CUR_LAYER:
      return {
        ...state,
        curLayer: action.curLayer,
      };
    case ACTION.DELETE_LAYER:
      newMaxTime = 0;
      state.keyframes.forEach((item) => {
        if (item.layerId !== action.layerId && item.keyframes
          && newMaxTime < item.keyframes[item.keyframes.length - 1].val) {
          newMaxTime = item.keyframes[item.keyframes.length - 1].val;
        }
      });
      return {
        ...state,
        layers: state.layers.filter((item) => item.id !== action.layerId),
        keyframes: state.keyframes.filter((item) => item.layerId !== action.layerId),
        maxTime: newMaxTime,
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
      const keyframe1 = state.keyframes.find((item) => item.layerId === action.layerId);
      const keyframe2 = state.keyframes[indexOfLayer + action.amount];
      const newKeyframes = state.keyframes.map((item, index) => {
        if (index !== indexOfLayer && index !== indexOfLayer + action.amount) return item;
        if (index === indexOfLayer) return keyframe2;
        return keyframe1;
      });
      return {
        ...state,
        layers: newLayers,
        keyframes: newKeyframes,
      };
    case ACTION.SET_KEY_FRAMES:
      newMaxTime = action.data[action.data.length - 1].val;
      state.keyframes.forEach((item) => {
        if (item.layerId !== action.layerId && item.keyframes
          && newMaxTime < item.keyframes[item.keyframes.length - 1].val) {
          newMaxTime = item.keyframes[item.keyframes.length - 1].val;
        }
      });
      return {
        ...state,
        keyframes: state.keyframes.map((item) => (
          item.layerId === action.layerId ? { ...item, keyframes: action.data } : item)),
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
