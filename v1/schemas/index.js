module.exports = function(mongoose){
  return {
    alias: require('./alias')(mongoose),
    id: require('./id')(mongoose),
    org: require('./org')(mongoose),
    part: require('./part')(mongoose),
    post: require('./post')(mongoose),
    project: require('./project')(mongoose),
    user: require('./user')(mongoose),
    volume: require('./volume')(mongoose)
  };
}
