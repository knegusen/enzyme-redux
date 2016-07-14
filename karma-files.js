var testsContext = require.context('./src/', true, /.+\Spec\.js$/);

testsContext.keys().forEach(testsContext);

var componentsContext = require.context('./src/', true, /^((?!Spec).)*.js$/);

componentsContext.keys().forEach(componentsContext);
