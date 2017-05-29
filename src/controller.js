export const handle = action => {
    const [ controllerName, methodName ] = action.split('@', 2);
    const controller = require('./controller/' + controllerName);
    return controller[methodName].bind(controller);
};
