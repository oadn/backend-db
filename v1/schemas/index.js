module.exports = function(mongoose){
  return {
    id: require('./id')(mongoose),
    alias: require('./alias')(mongoose),
    org: require('./org')(mongoose),
    project: require('./project')(mongoose),
    user: require('./user')(mongoose),
    part: require('./part')(mongoose),
    post: require('./post')(mongoose)
  };
}
