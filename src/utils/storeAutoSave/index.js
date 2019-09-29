import { autorun, toJS } from 'mobx';

function autoSave(_store, _save) {
  let firstRun = true;
  autorun(() => {
    const json = JSON.stringify(toJS(_store));
    if (!firstRun) {
      _save(json);
    }
    firstRun = false;
  });
}
export default autoSave;
