import ACTION from '../actionTypes';

const initialState = {
  templates: [
    {
      id: 'IndustryCompany1',
      scriptName: 'Industry Company - 1',
      entryPoint: 'IndustryCompany1',
    },
    {
      id: 'IndustryCompany2',
      scriptName: 'Industry Company - 2',
      entryPoint: 'IndustryCompany2',
    },
    {
      id: 'IndustryCompany3',
      scriptName: 'Industry Company - 3',
      entryPoint: 'IndustryCompany3',
    },
    {
      id: 'IndustryCompany4',
      scriptName: 'Industry Company - 4',
      entryPoint: 'IndustryCompany4',
    },
    {
      id: 'IndustryCompany5',
      scriptName: 'Industry Company - 5',
      entryPoint: 'IndustryCompany5',
    },
    {
      id: 'IndustryCompany6',
      scriptName: 'Industry Company - 6',
      entryPoint: 'IndustryCompany6',
    },
    {
      id: 'IndustryCompany7',
      scriptName: 'Industry Company - 7',
      entryPoint: 'IndustryCompany7',
    },
    {
      id: 'IndustryCompany8',
      scriptName: 'Industry Company - 8',
      entryPoint: 'IndustryCompany8',
    },
    {
      id: 'IndustryCompany9',
      scriptName: 'Industry Company - 9',
      entryPoint: 'IndustryCompany9',
    },
  ],
  property: {
    background: {
      color: '',
      image: '',
      show: true,
    },
  },
  animationViewSize: {
    width: 0,
    height: 0,
  },
  canvasSize: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  templateList: [],
  paused: true,
  exportMode: false,
};

export default function templateReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_ANIMATION_VIEW_SIZE:
      return {
        ...state,
        animationViewSize: { ...action.data },
      };

    case ACTION.SET_PAUSED:
      return {
        ...state,
        paused: action.data,
      };
    case ACTION.SET_TEMPLATE_BACKGROUND:
      return {
        ...state,
        property: {
          ...state.property,
          background: { ...action.data },
        },
      };
    case ACTION.SET_EXPORT_MODE:
      return {
        ...state,
        exportMode: action.data,
      };
    case ACTION.ADD_TEMPLATE:
      return {
        ...state,
        templateList: [...state.templateList, action.data],
      };
    case ACTION.SET_CANVAS_SIZE:
      return {
        ...state,
        canvasSize: { ...action.data },
      };
    default:
      return state;
  }
}
