const DjmUtilites = {

  getOriginalTarget(ev) {

    if ('composedPath' in ev) return ev.composedPath()[0]; // Standard
    else if ('path' in ev) return ev.path[0]; // Old Chrome
    else if ('originalTarget' in ev) return ev.originalTarget; // Firefox
    else if ('srcElement' in ev) return ev.srcElement; // Old IE & Safari
    else return ev.target; // Fallback to normal target.
  }

};
export { DjmUtilites };