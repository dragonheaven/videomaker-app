import ACTION from '../actionTypes';

const initialState = {
  layers: [
    {
      id: 0,
      selected: false,
      draggable: false,
      locked: true,
      hidden: false,
      title: 'template',

      keyframes: [
        {
          val: 40,
        },
        {
          val: 3000,
          selected: false,
        },
      ],
    },
    {
      id: 1,
      selected: false,
      hidden: false,
      title: 'circle',
      keyframes: [
        {
          cursor: 'default',
          val: 2000,
        },
        {
          val: 2500,
        },
        {
          val: 2600,
        },
      ],
    },
  ],
  curLayer: {},
  maxLayerId: 2,
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
    default:
      return state;
  }
}
