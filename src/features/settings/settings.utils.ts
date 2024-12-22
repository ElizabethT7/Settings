import { ISettings } from "./settings.types";

export const setSettingsState = (e: React.ChangeEvent<HTMLInputElement>, state: ISettings) => {
    const name = e.target.name as keyof typeof state;
    const changedState = {...state};

    if (!e.target.checked) {
      changedState[name] = 0;
      return changedState;
    }

    let order = 0;

    if(Object.values(changedState).includes(2)){
      order = 1;
      for (let key in changedState){
        const changedKey = key as keyof typeof changedState;
        changedState[changedKey] = changedState[changedKey] > 0 ? changedState[changedKey] -1 : 0;
      }
    } else if (Object.values(changedState).includes(1)){
      order = 1;
    }

    changedState[name] = order + 1;

    return changedState;
  };
