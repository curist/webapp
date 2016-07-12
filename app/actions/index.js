import B from 'app/broker';

B.removeAllListeners();

B.on('do', function(action) {
  B.emit(action.action, action);
});

