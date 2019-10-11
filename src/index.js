/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const fresher = !knowsProgramming * 500;      //1 or 0 * 500
      return Math.ceil((fresher + 800) / config[focus]);
      
  };
  