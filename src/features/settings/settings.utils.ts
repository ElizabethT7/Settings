import { Settings } from "./settings.types";

export const setSettingsState = (e: React.ChangeEvent<HTMLInputElement>, state: Settings) => {
    const name = e.target.name;
    const changedState = {...state};

    if (!e.target.checked) {
      changedState[name] = 0;
      return changedState;
    }

    if((name === "reverse") && !Object.values(changedState).includes(2) && !Object.values(changedState).includes(1)){
      changedState["theme"] = 1;
      changedState["sound"] = 2;
      return changedState;
    }

    let order = 0;

    if(Object.values(changedState).includes(2)){
      order = 1;

      for (let key in changedState){
        changedState[key] = changedState[key] > 0 && (name !== "reverse")  ? changedState[key] - 1 : 0;
      }

    } else if (Object.values(changedState).includes(1)){
      order = 1;

      if(name === "reverse"){

        for (let key in changedState){
        changedState[key] = changedState[key] === 0 ? 2 : 0;
        }
        
      }
    }

    changedState[name] = order + 1;

    return changedState;
  };

  export const settingsControl = [{
  name: "theme",
  label: "Переключить тему"
},
{
  name: "sound",
  label: "Проверить звук"
},
{  name: "reverse",
  label: "Поменять настройки"
},]
